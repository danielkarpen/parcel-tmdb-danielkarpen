module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "array-callback-return": "warn",
    "arrow-body-style": 1,
    "global-require": 1,
    "import/extensions": "off",
    "import/no-absolute-path": "off",
    "import/no-unresolved": "warn",
    "import/prefer-default-export": "warn",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-unused-expressions": ["error", { allowShortCircuit: true }],
    "no-unused-vars": "warn",
    "prefer-arrow-callback": 1,
  },
};
