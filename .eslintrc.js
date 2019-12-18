

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
// module.exports = {
// {
//   "rules": {
//       "react/forbid-prop-types": 0
//   }
// }
// };
// module.exports = {
//   "settings": {
//     "eslint-plugin-disable":{
//       "paths": {
//         "angular": ["**/lib/**/*.js"]
//       }
//     }
//   }
// }

// module.export = {
  
//     "rules": {
//       "react/forbid-prop-types": 0
//     }
// }
module.export = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  extends: ["plugin:prettier/recommended", "airbnb"],
  plugins: ["react", "jsx-a11y", "import", "prettier"],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  }
};