module.exports = function (browser) {
    this.openBrowser = function () {
      browser
        .windowMaximize()
        .url('http://google.com/')
        .waitForElementVisible('body', 1000);
      return browser;
    };
    this.headerImage = function () {
      browser
      .assert.visible('#hplogo');
    };
    this.searchInput = function () {
      browser
      .click('#lst-ib')
    browser.pause(3000);
      // .setValue('#lst-ib', 'Testing Testing'); // Enter text in a input value
      // browser.keys('\uE00C'); // use Keyboard Escape Key
    };
    this.luckyButton = function () {
      browser
       .pause(2000)
       .click('#gbqfbb')
       .pause(2000)
       .click('#tsf > div.tsf-p > div.jsb > center > div');
       browser.pause(2000);
       browser.back();
    };
    this.signInButton = function () { 
      browser
      .pause(4000)
      .click('#gb_70');
    };
    this.testEmail = function () {
      browser
      .setValue('#identifierId', 'dsafdfasdfsadfsdfsdajkfasfhsajklfshafjkslhfsjkalfhsafjklsafhsjkflahsjkalshfjkaslfhsdjkflashfjaksdlfhsafkjlsahfjasklfhsajfklashfajkflshjfklshfjsakdlfhasdjklf')
      .click('#identifierNext > content');
      browser.assert.elementPresent('#view_container > div > div > div.pwWryf.bxPAYd > div > content > form > div.cDSmF > div > div.LXRPh > div.dEOOab.RxsGPe');
    };

 
    return this;
  };
  