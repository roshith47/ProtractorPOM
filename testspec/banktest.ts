import { browser, element, by } from "protractor"
import { protractor } from "protractor/built/ptor";
import * as prop from "../testdata/prop.json"
//import {log4jsconfig} from '../config/log4jsconfig'
const log = require('../config/logging').default;
//prop1= require("../testdata/prop");
describe('Banking project test', function () {

    function VerifyAndCloseAlert(text: String) {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 4000, "Alert not found");
        let alert = browser.switchTo().alert();
        let alerttext = alert.getText();
        alerttext.then(function (txt) {
            log.debug("Alert text: " + txt);
        })

        browser.sleep(2000);
        expect(alerttext).toContain(text);
        alert.accept();

    }


    beforeEach(function () {
        //browser.get('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust');
        browser.get(prop.siteurl);
    })



    it("Verify the flow", function () {
       let firstname=prop.customers.firstname;
       let secondname=prop.customers.lastname;
       let pcode=prop.customers.postalcode;
       let fullname=firstname+" "+secondname;
        element(by.model('fName')).sendKeys(firstname);
        element(by.model('lName')).sendKeys(secondname);
        element(by.model('postCd')).sendKeys(pcode);
        element(by.className('btn btn-default')).click();
        VerifyAndCloseAlert("Customer added successfully");

        element(by.buttonText('Open Account')).click();

        let customer = element(by.model('custId'));
        let options = customer.all(by.tagName('option'));
        options.then(function (items) {
            log.debug("Drop down size: " + items.length);
            for (let i = 0; i < items.length; i++) {
                items[i].getText().then(function (txt: any) {
                    log.debug(txt);
                    if (txt == fullname) {
                        log.debug("Item found ");
                        items[i].click();
                    }
                })
            }

        })

        element(by.model('currency')).$('[value="Pound"]').click();//  by.css
        element(by.buttonText('Process')).click();

        browser.sleep(3000);
        VerifyAndCloseAlert("Account created");
        element(by.buttonText('Customers')).click();
        let rows = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
        browser.sleep(5000);
        rows.each(function (row: any) {
            let cells = row.$$('td');//all(by.css)
            cells.get(0).getText().then(function (txt: any) {
                if (txt == 'ABC') {
                    cells.get(4).$('button').click();
                }
            })
        })
        browser.sleep(5000);
    })



})

