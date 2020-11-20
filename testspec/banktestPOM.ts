import { browser, element, by } from "protractor"
import { protractor } from "protractor/built/ptor";
import { AddCustomerPage } from "../pages/AddCustomerPage";
import { BasePage } from "../pages/BasePage";
import { CustomersPage } from "../pages/CustomersPage";
import { OpenAccountPage } from "../pages/OpenAccountPage";
import * as prop from "../testdata/prop.json"
//import {log4jsconfig} from '../config/log4jsconfig'
const log = require('../config/logging').default;
//prop1= require("../testdata/prop");
describe('Banking project test', function () {




    beforeEach(async function () {
        //browser.get('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust');
        await browser.get(prop.siteurl);

    })
    it("Verify the flow",async function () {
        let addcustpage= new AddCustomerPage();
        let openAccpage= new OpenAccountPage();
        let custPage= new CustomersPage();
        await addcustpage.AddCustomer();
        browser.sleep(5000);
        await new BasePage().ClickOpenAccTab();
        browser.sleep(5000);
        await openAccpage.SelectACustomer();
        await openAccpage.SelectCurrency();
        browser.sleep(2000);
        await openAccpage.ClickProcessButton();
        await new BasePage().ClickCustomerTab();
        browser.sleep(5000);
        await custPage.VerifyCustomerEntryandDelete();
        browser.sleep(5000);
    })



})

