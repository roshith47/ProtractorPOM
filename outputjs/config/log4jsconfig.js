"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log4jsconfig = void 0;
var log4jsconfig = /** @class */ (function () {
    function log4jsconfig() {
    }
    log4jsconfig.Log = function () {
        var log4js = require('log4js');
        log4js.configure('./config/log4js.json');
        //var logger = log4js.getLogger(); //for both console and file
        var log = log4js.getLogger("default");
        return log;
    };
    return log4jsconfig;
}());
exports.log4jsconfig = log4jsconfig;
//# sourceMappingURL=log4jsconfig.js.map