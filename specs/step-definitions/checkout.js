var checkout = require('./../steps/pageElements/checkout.js');
var cart = require('./../steps/pageElements/shopCart.js');
var deepEqual = require('deep-equal');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect

module.exports = function() {

    this.Then(/^I should see "(.*)" form$/, function(formName) {

        var selector = browser.element('header.subsection').value;
        var expectedHeading = browser.elementIdText(selector.ELEMENT).value;
        expect(expectedHeading).include(formName);
    });
};