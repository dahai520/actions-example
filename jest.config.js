module.exports = {
  "testEnvironment": "jsdom",
  "collectCoverage": true,
  "coverageDirectory": "reports",
  "collectCoverageFrom": [
    "src/**/*.js",
    "!**/node_modules/**"
  ],
  "coverageReporters": [
    "clover",
    // "html",
    "text-summary"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 10,
      "functions": 10,
      "lines": 10,
      "statements": 10
    }
  },
  "moduleFileExtensions": [
    "js", "ts"
  ],
  "modulePaths": [
    "<rootDir>"
  ],
  "testRegex": "(/tests/.*|\\.test)\\.js"
}
