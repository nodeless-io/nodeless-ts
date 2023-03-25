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
var MAIN_NET = 'https://nodeless.io/api/';
var TEST_NET = 'https://testnet.nodeless.io/api/';
var Nodeless = /** @class */ (function () {
    function Nodeless(API_KEY, API_VERSION, testnet) {
        if (API_VERSION === void 0) { API_VERSION = '1'; }
        if (testnet === void 0) { testnet = false; }
        if (!API_KEY || typeof API_KEY !== 'string')
            throw 'API_KEY is a required argument.';
        this.API_KEY = API_KEY;
        this.BASE_URL = (testnet ? TEST_NET : MAIN_NET) + "v" + API_VERSION + "/";
    }
    Nodeless.prototype.createPayWallRequest = function (paywallID) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("paywall/" + paywallID + "/request", 'POST')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.getPayWallRequest = function (paywallID, requestID) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("paywall/" + paywallID + "/request/" + requestID, 'GET')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.getPayWallRequestStatus = function (paywallID, requestID) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("paywall/" + paywallID + "/request/" + requestID + "/status", 'GET')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.getAllPaywallWebhooks = function (paywallID) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("paywall/" + paywallID + "/webhook", 'GET')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.createPaywallWebhook = function (paywallID, requestBody) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("paywall/" + paywallID + "/webhook", 'POST', requestBody)];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.getPaywallWebhook = function (paywallID, webhookID) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("paywall/" + paywallID + "/webhook/" + webhookID, 'GET')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.deletePaywallWebhook = function (paywallID, webhookID) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("paywall/" + paywallID + "/webhook/" + webhookID, 'DELETE')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.updatePaywallWebhook = function (paywallID, webhookID, requestBody) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("paywall/" + paywallID + "/webhook/" + webhookID, 'PUT', requestBody)];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.getAllPaywalls = function () {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI('paywall', 'GET')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.createPaywall = function (requestBody) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI('paywall', 'POST', requestBody)];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.getPaywall = function (paywallID) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("paywall/" + paywallID, 'GET')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.updatePaywall = function (paywallID, requestBody) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("paywall/" + paywallID, 'PUT', requestBody)];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.deletePaywall = function (paywallID) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("paywall/" + paywallID, 'DELETE')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.getStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI('status', 'GET')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.createStoreInvoice = function (storeID, requestBody) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("store/" + storeID + "/invoice", 'POST', requestBody)];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.getStoreInvoice = function (storeID, invoiceID) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("store/" + storeID + "/invoice/" + invoiceID, 'GET')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.getStoreInvoiceStatus = function (storeID, invoiceID) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("store/" + storeID + "/invoice/" + invoiceID, 'GET')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.getAllStoreWebhooks = function (storeID) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("store/" + storeID + "/webhook", 'GET')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.createStoreWebhook = function (storeID, requestBody) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("store/" + storeID + "/webhook", 'POST', requestBody)];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.getStoreWebhook = function (storeID, webhookID) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("store/" + storeID + "/webhook/" + webhookID, 'GET')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.deleteStoreWebhook = function (storeID, webhookID) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("store/" + storeID + "/webhook/" + webhookID, 'DELETE')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.updateStoreWebhook = function (storeID, webhookID, requestBody) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("store/" + storeID + "/webhook/" + webhookID, 'PUT', requestBody)];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.getAllStores = function () {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI('store', 'GET')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.getStore = function (storeID) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("store/" + storeID, 'GET')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.getAllTransactions = function (isFee) {
        if (isFee === void 0) { isFee = false; }
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("transaction" + (isFee ? '?isFee=1' : ''), 'GET')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.getTransaction = function (transactionID) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callAPI("transaction/" + transactionID, 'GET')];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Nodeless.prototype.callAPI = function (path, method, requestBody) {
        var _a;
        if (path === void 0) { path = ''; }
        if (requestBody === void 0) { requestBody = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, body, response, json, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        url = "" + this.BASE_URL + path;
                        headers = {
                            Authorization: "Bearer " + this.API_KEY,
                            'Content-Type': 'application/json',
                            Accept: 'application/json'
                        };
                        body = JSON.stringify(requestBody);
                        return [4 /*yield*/, fetch(url, {
                                method: method,
                                headers: headers,
                                body: body
                            })];
                    case 1:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = (_a = (_b.sent())) !== null && _a !== void 0 ? _a : {};
                        return [2 /*return*/, json];
                    case 3:
                        err_1 = _b.sent();
                        return [2 /*return*/, { error: "" + err_1 }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Nodeless;
}());
export { Nodeless };
