const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "video": true,
      "baseUrl": "https://www.vr.com.br",
      "viewportHeight": 900,
      "viewportWidth": 1440,
      "defaultCommandTimeout":5000,
    setupNodeEvents(on, config) {
    },
  },
});
