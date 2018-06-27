module.exports = function (browser) {
    this.openBrowser = function () {
      browser
        .windowMaximize()
        .url('http://google.com/')
        .waitForElementVisible('body', 1000);
      return browser;
    };

    this.searchFullscreen = function () {
      browser
      .setValue('#lst-ib', 'fullscreen'); // Enter text in a input value
      browser.keys('\uE007') // use Keyboard Enter Key
      .pause(2000);
    };

    this.searchResult = function () {
      browser
      .getText('#resultStats', function(result){
        browser.assert.ok(result.value.length > 10);
      });
      //.assert.containsText('#resultStats', 'About 319,000,000 results'); // only pull string so not able to verify numberic greater than value.
    };
    this.topSearch = function () { 
      browser
      .assert.attributeContains('#rso > div:nth-child(2) > div > div:nth-child(1) > div > div > h3 > a', 'href', 'http://fullscreenmedia.co/about/');
    };
    this.gotoFullscreenGoogleLink = function () {
      browser
      .click('#rso > div:nth-child(2) > div > div:nth-child(1) > div > div > h3 > a')
      .pause(3000);
      browser.assert.urlContains('fullscreenmedia.co');
    };
    this.openfullscreen = function () {
      browser
        .windowMaximize()
        .url('http://fullscreenmedia.co/')
        .waitForElementVisible('body', 1000)
        .pause(3000);
      return browser;
    };
    this.privacyAgree = function () {
      browser
      .click('body > div.banner > div > div.button-wrapper > button');
    };
    this.creators = function () {
      browser
      .click('#menu-item-38 > a') // Click on the Createor link
      .waitForElementVisible('body', 1000)
      .pause(1000);
      browser.execute('scrollTo(0,0)');
      browser.saveScreenshot('./screenshots/1.jpg');
      browser.execute('scrollTo(0,500)');
      browser.saveScreenshot('./screenshots/2.jpg');
      browser.execute('scrollTo(0,1000)');
      browser.saveScreenshot('./screenshots/3.jpg');
      browser.execute('scrollTo(0,1500)');
      browser.saveScreenshot('./screenshots/4.jpg');
      browser.execute('scrollTo(0,2000)');
      browser.saveScreenshot('./screenshots/5.jpg');
      browser.execute('scrollTo(0,2500)');
      browser.saveScreenshot('./screenshots/6.jpg');
      browser.execute('scrollTo(0,3000)');
      browser.saveScreenshot('./screenshots/7.jpg');
    };
    this.brands = function () {
      browser
      .click('#menu-item-40 > a') // Click on the brands link
      .waitForElementVisible('body', 1000)
      .pause(1000);
    };
    this.careers = function () {
      browser
      .click('#menu-item-39 > a') // Click on the careers link
      .waitForElementVisible('body', 1000)
      .pause(1000);
    };
    // this.creatorLogin = function () {
    //   browser
    //   .click('body > header > div > div.main-menu-actions > div > a')
    //   .pause(3000)
    //   .setValue('#new_user > div:nth-child(3)', 'ronchoqa@gmail.com')
    //   // .setValue('input[type=password]', 'testtest')
    //   // .click('#recaptcha-anchor > div.recaptcha-checkbox-checkmark');
    // };

    return this;
  };
  