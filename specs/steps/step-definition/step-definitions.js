urlUtils = require('../support/utils.js');
var common = require('./../pageElements/common.js');
var shopDetail = require('./../pageElements/shopDetail.js');
var homePage = require('./../pageElements/homePage.js');
var cart = require('./../pageElements/shopCart.js');

var assert = require('assert');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {

  this.Given(/^Go to the route "([^"]*)"$/, function (url) {
    browser.url('http://localhost:8080/' + url);
    return browser.isVisible(homePage.tabs);

  });

  this.Then(/^The title of the page is "([^"]*)"$/, function (expectedTitle) {
    var title = browser.getTitle();
    assert.equal(title, expectedTitle, ' title is "' + title + '" but should be "' + expectedTitle);
  });

  this.Then(/^I wait for "([^"]*)" seconds$/, function (secs) {
    return browser.pause(secs * 1000);
  });

  this.Then(/^I should see "(.*)" heading/, function (heading) {
    var selector = common.heading + heading;
    var expectedHeading = browser.getText(selector);
    console.log("expectedHeading :" + expectedHeading);
    return expect(heading).to.equal(expectedHeading);

  });

  this.Then(/^I click the "(.*)" link/, function (linkName) {
    browser.isVisible(homePage.tabs);
    return browser.elements(homePage.tabs).click('=' + linkName);
  });

  this.Then(/^total no of items on the page are "(\d+)"/, function (totalItems) {
    return browser.isVisible(common.shopListItem);
    var expectedCount = browser.elements(common.noOfItems).value.length;
      return expect(expectedCount.toString()).to.equal(totalItems.toString());
  });

  this.Then(/^the item "(.*)" is "(.*)"/, function (selector, value) {
     var val = browser.getText(shopDetail.getItemDetail(selector));
    return expect(val.toString()).to.equal(value.toString());
  });

  this.Then(/^I click item (\d+)/, function (itemNumber) {
    var itemId = parseInt(itemNumber - 1);
    var element =  browser.elements('.grid a').value[itemId];
      return browser.elementIdClick(element.ELEMENT);
  });

  this.Then(/^I click "(.*)" button/, function (buttonName) {
    return browser.element('button='+buttonName).click();
  });

  this.Then(/^I click "(.*)" link/, function (tabName) {
    return browser.elements(homePage.tabs).value.filter(function (links) {
      if(browser.elementIdText(links.ELEMENT).value === tabName) {
        browser.elementIdClick(links.ELEMENT);
      }
    })
  });

  this.Then(/^I select "(.*)" from the "(.*)" dropdown/, function (fieldName, value) {
    return browser.elements('label').value.filter(function (labels) {
      if(browser.elementIdText(labels.ELEMENT).value === fieldName) {
        var selectBox = browser.element('#'+fieldName.toLowerCase()+'Select');
        return selectBox.selectByValue(value);
      }
    });
  });

  this.Then(/^I should see "(\d+)" items in shopping Cart/, function (items) {
    var expectedCount = browser.getText(cart.itemsInBasket);
    console.log(expectedCount);
    return expect(expectedCount).to.equal(items);
  });
};

