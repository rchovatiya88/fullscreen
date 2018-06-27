var utils = require('../../pages/google/utils');

module.exports = {
  '@tags': ['homepage'],
  before: function (browser) {
    utils(browser).openBrowser();
  },
  'Web page has elements - Google Main Page Loads,main Header Image': function (browser) { 
      utils(browser).headerImage();
  },
  'Search entry field': function (browser) {
    utils(browser).searchInput();
  },
  'Click on the feeling lucky button': function (browser) {
      utils(browser).luckyButton();
  },
  'Click on Sign In button': function (browser) {
      utils(browser).signInButton();
  },
  after: function (browser) {
    browser.pause(1000);
    browser.end();
  }
};
