module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    "no-use-before-define": ["error", { functions: false }],
    quotes: ["error", "double"],
    "import/prefer-default-export": "off",
    "no-param-reassign": ["error", { props: false }],
    radix: ["error", "as-needed"],
    "no-console": "error",
  },
};
