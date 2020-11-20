import { browser, element, by } from "protractor"
import { protractor } from "protractor/built/ptor";
import * as prop from "../testdata/prop.json"
import {alert} from "../util/alert"
//import {log4jsconfig} from '../config/log4jsconfig'
const log = require('../config/logging').default;
export class OpenAccountPage{

   customer = element(by.model('custId'));
    options = this.customer.all(by.tagName('option'));
    fullname=prop.customers.firstname+" "+prop.customers.lastname;
    currency= element(by.model('currency'));
    processbtn=element(by.buttonText('Process'));



  /*  SelectACustomer()
    {
        this.options.then(function (items) {
            log.debug("Drop down size: " + items.length);
            for (let i = 0; i < items.length; i++) {
                items[i].getText().then(function (txt: any) {
                    log.debug(txt);
                    if (txt == "ABC XYZ") {
                        log.debug("Item found ");
                        items[i].click();
                    }
                })
            }
    
            })
    }*/
    


   async SelectACustomer()
    {
        log.debug("Drop down size: " + await this.options.length);
        for (let i = 0; i < await this.options.length; i++){
            log.debug(await this.options.get(i).getText());
            log.debug(i);
            if(await this.options.get(i).getText()=="ABC XYZ")
            {
                log.debug("Item found ");
                await this.options.get(i).click();
            }

        }
    }






    async SelectCurrency(){
        await this.currency.$('[value="Pound"]').click();

    }

    async ClickProcessButton(){
      await  this.processbtn.click();
       await browser.sleep(3000);
        await alert.VerifyAndCloseAlert("Account created");

    }
          
   

}







