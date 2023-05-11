/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  
  collectCoverage: true,


  coverageDirectory: 'coverage',

  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  },

  "moduleNameMapper": {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },

  "transformIgnorePatterns": [
    "/node_modules/",
    "/src/*.png"
  ]
  
};
