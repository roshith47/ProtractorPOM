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
exports.CustomersPage = void 0;
var protractor_1 = require("protractor");
var prop = __importStar(require("../testdata/prop.json"));
//import {log4jsconfig} from '../config/log4jsconfig'
var log = require('../config/logging').default;
var CustomersPage = /** @class */ (function () {
    function CustomersPage() {
        this.rows = protractor_1.element.all(protractor_1.by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
    }
    CustomersPage.prototype.VerifyCustomerEntryandDelete = function () {
        this.rows.each(function (row) {
            var cells = row.$$('td'); //all(by.css)
            cells.get(0).getText().then(function (txt) {
                if (txt == prop.customers.firstname) {
                    cells.get(4).$('button').click();
                }
            });
        });
    };
    return CustomersPage;
}());
exports.CustomersPage = CustomersPage;
//# sourceMappingURL=CustomersPage.js.map