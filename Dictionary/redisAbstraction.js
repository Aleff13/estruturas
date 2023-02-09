"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var DictionaryV2_1 = require("./DictionaryV2");
var Redis = /** @class */ (function (_super) {
    __extends(Redis, _super);
    function Redis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Redis.prototype.GET = function (key) {
        return this.get(key);
    };
    Redis.prototype.SET = function (key, value, time) {
        if (!time) {
            return this.set(key, value);
        }
        throw new Error('Not implemented yet"');
    };
    Redis.prototype.FLUSHALL = function () {
        this.clear();
    };
    return Redis;
}(DictionaryV2_1["default"]));
var dic = new DictionaryV2_1["default"]();
dic.set("cache1", "12345");
dic.set("cache2", "123456");
dic.set("cache3", "1234567");
dic.forEach(console.log);
dic.forEach(function (k, v) {
    console.log(k, v);
});
//const redisInstance = new Redis();
