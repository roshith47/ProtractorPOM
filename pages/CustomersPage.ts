import { browser, element, by } from "protractor"
import { protractor } from "protractor/built/ptor";
import * as prop from "../testdata/prop.json"
import {alert} from "../util/alert"
//import {log4jsconfig} from '../config/log4jsconfig'
const log = require('../config/logging').default;
export class CustomersPage{
    rows = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
    
    VerifyCustomerEntryandDelete(){
        this.rows.each(function (row: any) {
            let cells = row.$$('td');//all(by.css)
            cells.get(0).getText().then(function (txt: any) {
                if (txt == prop.customers.firstname) {
                    cells.get(4).$('button').click();
                }
            })
        })
    

    }
    
    
    


}
