"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
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
    onPrepare: function () {
        var os = require('os');
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(4000);
    }
};
//# sourceMappingURL=conf.js.map