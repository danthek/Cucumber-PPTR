const { Before, After, Given, When, Then } = require('cucumber');

Before(async function () {
  // before each feature step it willrun this code and execute  the launchBrowser function
  return await this.launchBrowser();
});
After(async function () {
  return await this.closeBrowser();
});

// from now on we are creating functions for each of the feature steps
Given('I open login page', async function () {
  return await this.visit();
});
When('I fill login form', async function () {
  return await this.fillLoginForm();
});
When('I click on submit button', async function () {
  return await this.submitLogin();
});
Then('I expect to see application content', async function () {
  return await this.verifySuccessfullLogin();
});
