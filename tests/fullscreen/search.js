var utils = require('../../pages/fullscreen/utils');

module.exports = {
  '@tags': ['search'],
  before: function (browser) {
    utils(browser).openBrowser();
  },
  'Search for fullscreen search term': function (browser) {
    utils(browser).searchFullscreen();
  },
  'Verify more than five search results': function(browser) {
      utils(browser).searchResult();
  },
  'Verify Top result for Fullscreen media': function(browser){
      utils(browser).topSearch();
  },
  'Go to Fullscreen via Google Redirect link': function(browser){
      utils(browser).gotoFullscreenGoogleLink();
  },
  after: function (browser) {
    browser.pause(1000);
    browser.end();
  }
};
