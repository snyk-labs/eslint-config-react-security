"use script";

module.exports = {
  root: true,
  parser: "babel-eslint",
  plugins: ["react", "react-security", "no-unsanitized"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    "no-danger": "warn",
    "no-find-dom-node": "warn",
    "jsx-no-script-url": "warn",
    "jsx-no-target-blank": "warn",
    "jsx-props-no-spreading": "warn",
    // https://github.com/snyk-labs/eslint-plugin-react-security
    "no-refs": "warn",
    // https://github.com/mozilla/eslint-plugin-no-unsanitized
    "no-unsanitized/method": "error",
    "no-unsanitized/property": "error",
  },
};
