import { browser, element, by } from "protractor"
import { protractor } from "protractor/built/ptor";
import * as prop from "../testdata/prop.json"
import {alert} from "../util/alert"
//import {log4jsconfig} from '../config/log4jsconfig'
const log = require('../config/logging').default;
export class AddCustomerPage{

     fname=element(by.model('fName'));
     lname=element(by.model('lName'));
     postalcode= element(by.model('postCd'));
     addCustomerbtn = element(by.className('btn btn-default'));

async AddCustomer(){
    await this.fname.sendKeys(prop.customers.firstname);
    await this.lname.sendKeys(prop.customers.lastname);
    await this.postalcode.sendKeys(prop.customers.postalcode);
    await this.addCustomerbtn.click();
    await alert.VerifyAndCloseAlert("Customer added");
    


}




}