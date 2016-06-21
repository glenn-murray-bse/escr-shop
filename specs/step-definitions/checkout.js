var chai = require('chai');
var should = require('chai').should();
var expect = chai.expect;
var deepEqual = require('deep-equal');


module.exports = function () {

  this.Then(/^I should see "(.*)" form$/, function (formName) {

    var selector = browser.element('header.subsection').value;
    var expectedHeading = browser.elementIdText(selector.ELEMENT).value;
    expect(expectedHeading).include(formName);
  });
  this.Then(/^I click "(.*)" checkout button/, function (buttonName) {
    var selector = 'shop-button input';
    var elem = browser.element(selector).value;
    var buttonValue = browser.getAttribute(selector, 'value');
    if (buttonValue === buttonName) {
      return browser.elementIdClick(elem.ELEMENT);
    }
  });
  this.Then(/^the following field has error message:/, function (dataTable) {
    var actual = [];
    var expectedFacilities = dataTable.hashes().map(function (row) {
      return Object.keys(row).map(function (key) {
        return row[key];
      });
    });
    
    var errorMessageSelector = browser.elements('shop-input shop-md-decorator');
    for (var i = 0; i < errorMessageSelector.value.length; i++) {
      var el = browser.elements('shop-input input').value[i].ELEMENT;
      var p = browser.elementIdAttribute(el, 'aria-invalid').value;
      //console.log("Hello My Value is :"+p);
      if (p === 'true') {
        var text = browser.elementIdText(errorMessageSelector.value[i].ELEMENT).value;
        actual.push(text);
      }
    }
    //console.log("Expect: " + expectedFacilities);
    //console.log("Actual " + actual);
    return expect(expectedFacilities.toString()).to.equal(actual.toString());

  });
};