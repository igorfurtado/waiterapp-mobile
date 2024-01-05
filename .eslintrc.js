module.exports = {
  root: true,
  extends: [
    'prettier',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'expo/tsconfig.base'
  ],
  plugins: ['@typescript-eslint', 'prettier']
}
