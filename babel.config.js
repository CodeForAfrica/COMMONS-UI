module.exports = {
  presets: ["@babel/preset-react", "@babel/preset-env"],
  plugins: ["inline-react-svg"],
  env: {
    development: {
      plugins: [["module-resolver"]],
    },
  },
};
