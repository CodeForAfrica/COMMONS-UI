const fs = require("fs");
const { readdirSync } = require("fs");
const inquirer = require("inquirer");
const { exec } = require("child_process");

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @return {Object} { stdout: String, stderr: String }
 */
async function sh(cmd) {
  return new Promise(function run(resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

inquirer
  .prompt([
    {
      type: "list",
      message: "Which Project Do you want to run",
      name: "project",
      choices: getDirectories("./projects"),
    },
  ])
  .then(async ({ project }) => {
    const obj = JSON.parse(
      fs.readFileSync(`./projects/${project}/package.json`, "utf8")
    );
    obj.dependencies["@commons-ui/core"] = "file:../../build";
    fs.writeFileSync(`./projects/${project}/package.json`, JSON.stringify(obj));
    await sh(`cd ./projects/${project} && yarn  && git restore . && yarn dev`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

// Get list of projects
// allow user to select Project to run
// Format project with local commons ui, install dependencies, restore git and run project
