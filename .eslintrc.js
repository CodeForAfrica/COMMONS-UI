const path = require("path");

module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:markdown/recommended",
    "plugin:json/recommended",
    "plugin:import/recommended",
    "airbnb",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["module-resolver"],
  settings: {
    "import/resolver": {
      "babel-module": {},
      "eslint-import-resolver-lerna": {
        packages: path.resolve(__dirname, "packages"),
      },
    },
  },
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    "module-resolver/use-alias": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "react/jsx-props-no-spreading": "off", // We use HOC, etc. & this will wreck havoc
  },
  overrides: [
    {
      files: ["stories/**/*.js"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "react/prop-types": "off",
      },
    },
  ],
};
