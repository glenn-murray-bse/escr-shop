var assert = require('assert');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
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
    //this.When(/^I close the dialog$/, function(callback) {
    //    dialog.getCloseIcon().click().should.notify(callback);
    //});
    //
    //this.When(/^I click the x close dialog button$/, function(callback) {
    //    dialog.getCloseIcon().click().should.notify(callback);
    //});
    //

    //
    //this.Then(/^the "(.*)" dialog button is (enabled|disabled)$/, function(button, expectedState, callback) {
    //    var isDisabled = (expectedState === 'disabled' ? 'true' : null);
    //    browser.wait(function() {
    //        return (dialog.getButton(button).getAttribute('disabled')
    //            .then(function(disabled) {
    //                return disabled === isDisabled;
    //            }));
    //    }, 2000)
    //        .then(function() {
    //            dialog.getButton(button).getAttribute('disabled').should.eventually.equal(isDisabled)
    //        }).should.notify(callback);
    //});
    //
    //this.Then(/^no dialog is displayed$/, function(callback) {
    //    dialog.waitToDisappear().should.notify(callback);
    //});
    //
    //this.Then(/^a dialog with title "(.*)" is not displayed$/, function(expectedTitle, callback) {
    //    dialog.waitToAppear()
    //        .then(function() {
    //            dialog.getTitle().getText().should.not.equal(expectedTitle)
    //        }).should.notify(callback);
    //});
    //
    //this.Given(/^the dialog disappears$/, function(callback) {
    //    dialog.waitToDisappear().should.notify(callback);
    //});
    //
    //this.When(/^I click the "(.*)" dialog link$/, function(linkText, callback) {
    //    dialog.get().element(by.cssContainingText('a', linkText)).click().should.notify(callback);
    //});
    //
    //this.Then(/^the "(.*)" dialog link (is|is not) displayed$/, function(linkText, toggle, callback) {
    //    var expectToBeDisplayed = (toggle === 'is' ? true : false);
    //
    //    if (expectToBeDisplayed) {
    //        dialog.get().element(by.cssContainingText('a', linkText)).isDisplayed().should.eventually.be.true.should.notify(callback);
    //    } else {
    //        browser.wait(protractor.ExpectedConditions.invisibilityOf(dialog.get().element(by.cssContainingText('a', linkText))), 0).should.eventually.be.true.should.notify(callback);
    //    }
    //});
    //
    //this.Then(/^the "(.*)" dialog link is (enabled|disabled)$/, function(linkText, expectedState, callback) {
    //    var isDisabled = (expectedState === 'disabled' ? 'true' : null);
    //    browser.wait(function() {
    //        return (dialog.get().element(by.cssContainingText('a', linkText)).getAttribute('disabled')
    //            .then(function(disabled) {
    //                return disabled === isDisabled;
    //            }));
    //    }, 2000)
    //        .then(function() {
    //            dialog.get().element(by.cssContainingText('a', linkText)).getAttribute('disabled').should.eventually.equal(isDisabled)
    //        }).should.notify(callback);
    //});
};