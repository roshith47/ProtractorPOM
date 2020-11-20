"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
//import {log4jsconfig} from '../config/log4jsconfig'
var log = require('../config/logging').default;
describe('Demo calculator test', function () {
    beforeEach(function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    });
    it("Launch url check", function () {
        expect(protractor_1.browser.getTitle()).toContain("Super");
        var browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (text) {
            log.debug("Browser title: " + text);
            //log4jsconfig.Log().debug("Browser title: "+text);
            // console.log("Browser title: "+text);
        });
    });
    it('addition test', function () {
        protractor_1.element(protractor_1.by.model('first')).sendKeys('2');
        protractor_1.element(protractor_1.by.model('second')).sendKeys('3');
        protractor_1.element(protractor_1.by.css('[ng-click="doAddition()"]')).click();
        // let  result= element(by.cssContainingText('.ng-binding', '5'));
        //  expect<any>(result.getText()).toEqual('5');
        protractor_1.browser.sleep(2000);
    });
});
//# sourceMappingURL=calculator.js.map