"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.FirestoreService = void 0;
// src/services/FirestoreService.ts
var lite_1 = require("firebase/firestore/lite");
var app_1 = require("firebase/compat/app");
require("firebase/compat/firestore");
var serviceAccount = require('./config.json');
var app = app_1.default.initializeApp(serviceAccount);
var db = (0, lite_1.getFirestore)(app);
var FirestoreService = /** @class */ (function () {
    function FirestoreService(firestore) {
        this.firestore = firestore;
        this.collectionName = 'weather';
    }
    FirestoreService.prototype.addWeather = function (location, data) {
        return __awaiter(this, void 0, void 0, function () {
            var weatherDocRef, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        weatherDocRef = (0, lite_1.doc)(this.firestore, this.collectionName, location);
                        return [4 /*yield*/, (0, lite_1.setDoc)(weatherDocRef, data)];
                    case 1:
                        _a.sent();
                        console.log("Weather data saved for location:", location);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Error adding weather data:", error_1);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FirestoreService.prototype.getWeather = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var weatherDocRef, docSnap, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        weatherDocRef = (0, lite_1.doc)(this.firestore, this.collectionName, location);
                        return [4 /*yield*/, (0, lite_1.getDoc)(weatherDocRef)];
                    case 1:
                        docSnap = _a.sent();
                        if (docSnap.exists()) {
                            return [2 /*return*/, __assign({}, docSnap.data())];
                        }
                        else {
                            console.log("No weather data found for location:", location);
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.error("Error getting weather data:", error_2);
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FirestoreService.prototype.updateWeather = function (location, data) {
        return __awaiter(this, void 0, void 0, function () {
            var weatherDocRef, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        weatherDocRef = (0, lite_1.doc)(this.firestore, this.collectionName, location);
                        return [4 /*yield*/, (0, lite_1.updateDoc)(weatherDocRef, data)];
                    case 1:
                        _a.sent();
                        console.log("Weather data updated for location:", location);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.error("Error updating weather data:", error_3);
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FirestoreService.prototype.deleteWeather = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var weatherDocRef, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        weatherDocRef = (0, lite_1.doc)(this.firestore, this.collectionName, location);
                        return [4 /*yield*/, (0, lite_1.deleteDoc)(weatherDocRef)];
                    case 1:
                        _a.sent();
                        console.log("Weather data deleted for location:", location);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.error("Error deleting weather data:", error_4);
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return FirestoreService;
}());
exports.FirestoreService = FirestoreService;
var firestoreService = new FirestoreService(db);
exports.default = firestoreService;
