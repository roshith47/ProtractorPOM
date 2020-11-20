"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAccountPage = void 0;
var protractor_1 = require("protractor");
var prop = __importStar(require("../testdata/prop.json"));
var alert_1 = require("../util/alert");
//import {log4jsconfig} from '../config/log4jsconfig'
var log = require('../config/logging').default;
var OpenAccountPage = /** @class */ (function () {
    function OpenAccountPage() {
        this.customer = protractor_1.element(protractor_1.by.model('custId'));
        this.options = this.customer.all(protractor_1.by.tagName('option'));
        this.fullname = prop.customers.firstname + " " + prop.customers.lastname;
        this.currency = protractor_1.element(protractor_1.by.model('currency'));
        this.processbtn = protractor_1.element(protractor_1.by.buttonText('Process'));
    }
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
    OpenAccountPage.prototype.SelectACustomer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, i, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _b = (_a = log).debug;
                        _c = "Drop down size: ";
                        return [4 /*yield*/, this.options.length];
                    case 1:
                        _b.apply(_a, [_c + (_g.sent())]);
                        i = 0;
                        _g.label = 2;
                    case 2:
                        _d = i;
                        return [4 /*yield*/, this.options.length];
                    case 3:
                        if (!(_d < (_g.sent()))) return [3 /*break*/, 8];
                        _f = (_e = log).debug;
                        return [4 /*yield*/, this.options.get(i).getText()];
                    case 4:
                        _f.apply(_e, [_g.sent()]);
                        log.debug(i);
                        return [4 /*yield*/, this.options.get(i).getText()];
                    case 5:
                        if (!((_g.sent()) == "ABC XYZ")) return [3 /*break*/, 7];
                        log.debug("Item found ");
                        return [4 /*yield*/, this.options.get(i).click()];
                    case 6:
                        _g.sent();
                        _g.label = 7;
                    case 7:
                        i++;
                        return [3 /*break*/, 2];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    OpenAccountPage.prototype.SelectCurrency = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.currency.$('[value="Pound"]').click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OpenAccountPage.prototype.ClickProcessButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.processbtn.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert_1.alert.VerifyAndCloseAlert("Account created")];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return OpenAccountPage;
}());
exports.OpenAccountPage = OpenAccountPage;
//# sourceMappingURL=OpenAccountPage.js.map