// module.exports = {
//   root: true,
//   extends: '@react-native-community',
//   "rules": {
//     "no-unused-vars": "warn",
//     "react/forbid-prop-types": 0,
//     "semi": ["error", "always"],
//     "quotes": ["error", "double"]
// }
// };

module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off'
  },
  'globals': {
    "fetch": false
  }
}