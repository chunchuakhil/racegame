module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin: react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': ['error', {printWidth: 120}],
  },
};
