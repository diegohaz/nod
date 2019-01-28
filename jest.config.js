module.exports = {
  projects: [
    {
      displayName: "test"
    },
    {
      displayName: "lint",
      runner: "jest-runner-eslint",
      testMatch: ["<rootDir>/**/*.js"]
    }
  ]
};
