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
var Set_1 = require("./Set");
/**
 * This class implements super methods to work with math and "sql" problems
 * All methods are pure, don't have changes on this.items
 */
var SuperSet = /** @class */ (function (_super) {
    __extends(SuperSet, _super);
    function SuperSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * returns a set where set union this.set
     * @param otherSet
     */
    SuperSet.prototype.union = function (otherSet) {
        var unionSet = new Set_1["default"]();
        var values = this.values(); // is an array like [1, 2, 3, ... n]
        values.forEach(function (val) {
            unionSet.add(val); //this method does not allow repetition
        });
        values = otherSet.values(); //is another array
        values.forEach(function (val) {
            unionSet.add(val); //this method does not allow repetition
        });
        //when the iteration use .add with this.values() and otherSet.values() the new set dont have repetition
        return unionSet;
    };
    /**
     * returns a set where set intersection this.set
     * @param otherSet
     */
    SuperSet.prototype.intersection = function (otherSet) {
        var intersectionSet = new Set_1["default"]();
        var values = this.values();
        values.forEach(function (val) {
            if (otherSet.has(val)) { //se contém o valor do outro conjunto
                intersectionSet.add(val);
            }
        });
        return intersectionSet;
    };
    /**
     * returns a set where set - this.set
     * @param otherSet
     */
    SuperSet.prototype.difference = function (otherSet) {
        throw new Error("Method not implemented.");
    };
    /**
     * returns a boolean where set isSubsetOf this.set
     * @param otherSet
     */
    SuperSet.prototype.isSubsetOf = function (otherSet) {
        throw new Error("Method not implemented.");
    };
    return SuperSet;
}(Set_1["default"]));
exports["default"] = SuperSet;
