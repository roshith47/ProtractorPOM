import { browser, element, by } from "protractor"
import { protractor } from "protractor/built/ptor";
const log = require('../config/logging').default;
export class BasePage{
openAccount= element(by.buttonText('Open Account'));
Customers=element(by.buttonText('Customers'));


async ClickOpenAccTab(){
    await this.openAccount.click();
}

async ClickCustomerTab(){
    await this.Customers.click();
}

}
