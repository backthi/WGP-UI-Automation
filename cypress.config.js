const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      specPattern: "cypress/e2e/specs/*.cy.{js,jsx,ts,tsx}",  
      screenshotOnRunFailure : true,
      pageLoadTimeout: 10000,
      baseUrl: 'https://qa-internet.bgp.onl/',
      userName: "public",
      password: "Let$BeC001",
      chromeWebSecurity: false
  },
});
