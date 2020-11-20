"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
var protractor_1 = require("protractor");
var log = require('../config/logging').default;
var BasePage = /** @class */ (function () {
    function BasePage() {
        this.openAccount = protractor_1.element(protractor_1.by.buttonText('Open Account'));
        this.Customers = protractor_1.element(protractor_1.by.buttonText('Customers'));
    }
    BasePage.prototype.ClickOpenAccTab = function () {
        this.openAccount.click();
    };
    BasePage.prototype.ClickCustomerTab = function () {
        this.Customers.click();
    };
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map