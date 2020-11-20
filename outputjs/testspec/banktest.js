"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var ptor_1 = require("protractor/built/ptor");
var prop = __importStar(require("../testdata/prop.json"));
//import {log4jsconfig} from '../config/log4jsconfig'
var log = require('../config/logging').default;
//prop1= require("../testdata/prop");
describe('Banking project test', function () {
    function VerifyAndCloseAlert(text) {
        var EC = ptor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(EC.alertIsPresent(), 4000, "Alert not found");
        var alert = protractor_1.browser.switchTo().alert();
        var alerttext = alert.getText();
        alerttext.then(function (txt) {
            log.debug("Alert text: " + txt);
        });
        protractor_1.browser.sleep(2000);
        expect(alerttext).toContain(text);
        alert.accept();
    }
    beforeEach(function () {
        //browser.get('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust');
        protractor_1.browser.get(prop.siteurl);
    });
    it("Verify the flow", function () {
        var firstname = prop.customers.firstname;
        var secondname = prop.customers.lastname;
        var pcode = prop.customers.postalcode;
        var fullname = firstname + " " + secondname;
        protractor_1.element(protractor_1.by.model('fName')).sendKeys(firstname);
        protractor_1.element(protractor_1.by.model('lName')).sendKeys(secondname);
        protractor_1.element(protractor_1.by.model('postCd')).sendKeys(pcode);
        protractor_1.element(protractor_1.by.className('btn btn-default')).click();
        VerifyAndCloseAlert("Customer added successfully");
        protractor_1.element(protractor_1.by.buttonText('Open Account')).click();
        var customer = protractor_1.element(protractor_1.by.model('custId'));
        var options = customer.all(protractor_1.by.tagName('option'));
        options.then(function (items) {
            log.debug("Drop down size: " + items.length);
            var _loop_1 = function (i) {
                items[i].getText().then(function (txt) {
                    log.debug(txt);
                    if (txt == fullname) {
                        log.debug("Item found ");
                        items[i].click();
                    }
                });
            };
            for (var i = 0; i < items.length; i++) {
                _loop_1(i);
            }
        });
        protractor_1.element(protractor_1.by.model('currency')).$('[value="Pound"]').click(); //  by.css
        protractor_1.element(protractor_1.by.buttonText('Process')).click();
        protractor_1.browser.sleep(3000);
        VerifyAndCloseAlert("Account created");
        protractor_1.element(protractor_1.by.buttonText('Customers')).click();
        var rows = protractor_1.element.all(protractor_1.by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
        protractor_1.browser.sleep(5000);
        rows.each(function (row) {
            var cells = row.$$('td'); //all(by.css)
            cells.get(0).getText().then(function (txt) {
                if (txt == 'ABC') {
                    cells.get(4).$('button').click();
                }
            });
        });
        protractor_1.browser.sleep(5000);
    });
});
//# sourceMappingURL=banktest.js.map