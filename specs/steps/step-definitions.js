var assert = require('assert');
var chai = require('chai');
var webdriverio = require('webdriverio');

urlUtils = require('../../specs/steps/support/utils.js');
var ladiesOutwear = require('./pageElements/ladiesOutwear.js');
var homePage = require('./pageElements/homePage.js');

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {

  this.Given(/^Go to the route "([^"]*)"$/, function (url) {
    browser.url('http://localhost:8080/' + url);
  });

  this.Then(/^The title of the page is "([^"]*)"$/, function (expectedTitle) {
    var title = browser.getTitle();
    assert.equal(title, expectedTitle, ' title is "' + title + '" but should be "' + expectedTitle);
  });

  this.Then(/^I wait for "([^"]*)" seconds$/, function (secs) {
    return browser.pause(secs * 1000);
  });

  this.Then(/^I should see "(.*)" heading/, function (heading) {
    var selector = ladiesOutwear.heading + heading;
    console.log(selector);
    var expectedHeading = browser.getText(selector);
    console.log("expectedHeading :" + expectedHeading);
    return expect(heading).to.equal(expectedHeading);

  });

  this.Then(/^I click the "(.*)" link/, function (tabName) {
    browser.isVisible(homePage.tabs);
    return browser.elements(homePage.tabs).click('='+tabName);
  });

  this.Then(/^I click "(.*)" link/, function (tabName) {
   var tabs = browser.elements(homePage.tabs);
    var i=0;
        for(i; i < tabs.value.length; i++){
          var link = tabs.getText();
          console.log(link[i]);
          if(link[i] === tabName){
            console.log("I am here");
            return browser.click('='+link[i]);
          }else{
            console.log("Nothing matched");
          }
        }
      });
};

