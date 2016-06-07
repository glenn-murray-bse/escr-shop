var assert = require('assert');
urlUtils = require('../../specs/steps/support/utils.js');
module.exports = function(){

  this.Given(/^Go to the route "([^"]*)"$/, function(url) {
    browser.url('http://localhost:8080/' + url);
  });

  this.Then(/^The title of the page is "([^"]*)"$/, function(expectedTitle) {
    var title = browser.getTitle();
    assert.equal(title, expectedTitle, ' title is "'+ title + '" but should be "'+ expectedTitle);
  });

};
