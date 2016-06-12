var assert = require('assert');
//var chai = require('chai');
//var chaiAsPromised = require('chai-as-promised');
//chai.use(chaiAsPromised);
var expect = chai.expect;

var modal = require('./../pageElements/modal.js');

module.exports = function() {

    this.Then(/^a dialog is displayed with title "(.*)"$/, function(expectedTitle) {
        var isVisible = browser.waitForVisible(modal.shopCartModal);
        if(isVisible){
            var title = browser.getText(modal.modalTitle);
            return expect(title).to.equal(expectedTitle);
        }else{
            console.log('Element is not Visible');
        }
    });

    this.When(/^I click the "(.*)" dialog button$/, function(buttonName) {
        var isVisible = browser.waitForVisible(modal.shopCartModal);
        if(isVisible){
            return browser.elements(modal.button).click('a=' + buttonName);
        }else{
            console.log('dialog is not Visible');
        }
    });
};