import {browser,element,by} from "protractor"
//import {log4jsconfig} from '../config/log4jsconfig'
const log = require('../config/logging').default;
describe('Demo calculator test', function(){

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    })

    it("Launch url check", function(){

        expect(browser.getTitle()).toContain("Super");
        let browserTitle=browser.getTitle();
        browserTitle.then(function(text){
            log.debug("Browser title: "+text);
            //log4jsconfig.Log().debug("Browser title: "+text);
           // console.log("Browser title: "+text);
        })
        
    })

    it('addition test', function() {
    
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('3');
        element(by.css('[ng-click="doAddition()"]')).click();
       
       // let  result= element(by.cssContainingText('.ng-binding', '5'));
      //  expect<any>(result.getText()).toEqual('5');
        
        browser.sleep(2000);
        
    
    
    })
    
    
    
    })