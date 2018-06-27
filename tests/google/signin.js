var utils = require('../../pages/google/utils');

module.exports = {
  '@tags': ['signin'],
  before: function (browser) {
    utils(browser).openBrowser();
  },
  'Click on Sign In button': function (browser) {
      utils(browser).signInButton();
  },
  'Invalid sign in': function (browser){
      utils(browser).testEmail();
  },
  after: function (browser) {
    browser.pause(1000);
    browser.end();
  }
};
