var utils = require('../../pages/fullscreen/utils');

module.exports = {
  '@tags': ['smoketests'],
  before: function (browser) {
    utils(browser).openfullscreen();
  },
  'Agree for the Privay Policy': function (browser) {
      utils(browser).privacyAgree();
  },
  'Click on Main Menu links': function (browser) {
    utils(browser).creators();
    utils(browser).brands();
    utils(browser).careers();
  },
  after: function (browser) {
    browser.pause(1000);
    browser.end();
  }
};
