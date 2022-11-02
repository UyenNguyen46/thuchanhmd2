"use strict";
exports.__esModule = true;
exports.Goods = void 0;
var Goods = /** @class */ (function () {
    function Goods(id, name, sectors, price, amount, describe) {
        this._id = id;
        this._name = name;
        this._sectors = sectors;
        this._price = price;
        this._amount = amount;
        this._describe = describe;
    }
    Goods.prototype.getId = function () {
        return this._id;
    };
    Goods.prototype.setId = function (value) {
        this._id = value;
    };
    Goods.prototype.getName = function () {
        return this._name;
    };
    Goods.prototype.setName = function (value) {
        this._name = value;
    };
    Goods.prototype.setPrice = function (value) {
        this._price = value;
    };
    Goods.prototype.setAmount = function (value) {
        this._amount = value;
    };
    Goods.prototype.setDescribe = function (value) {
        this._describe = value;
    };
    return Goods;
}());
exports.Goods = Goods;
