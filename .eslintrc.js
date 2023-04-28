module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['*.css', '*.svg'],
    extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-key": ["warn", { "checkFragmentShorthand": true }],
    "no-console": "warn"
  },
};
