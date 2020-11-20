import {Config, browser} from 'protractor';
exports.config = {
    directConnect: true,
  
    
    capabilities: {
      browserName: 'chrome'
      //browserName: 'firefox',
     // marionette: true,
      //acceptSslCert: true
    },
  
    framework: 'jasmine',

    //specs: ['./specs/calculator.js'],
     specs: ['./testspec/banktestPOM.js'],

    //seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare:()=>{
    var os= require('os');
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(4000);
  }

  };
  