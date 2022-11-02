"use strict";
exports.__esModule = true;
exports.Goodsmanager = void 0;
var readlineSync = require("readline-sync");
var Goodsmanager = /** @class */ (function () {
    function Goodsmanager() {
        this.goods = [];
    }
    Goodsmanager.prototype.showList = function () {
        return this.goods;
    };
    Goodsmanager.prototype.searchByName = function (name) {
        var names = [];
        for (var i = 0; i < this.goods.length; i++) {
            if (this.goods[i].getName() == name) {
                names.push(this.goods[i]);
            }
        }
        return names;
    };
    Goodsmanager.prototype.add = function (staff) {
        this.goods.push(staff);
    };
    Goodsmanager.prototype.edit = function (id) {
        if (this.goods[id - 1].getId() == id) {
            this.goods[id - 1].setName(readlineSync.question('Nhap ten moi: '));
            this.goods[id - 1].setId(+readlineSync.question('Nhap id moi: '));
            this.goods[id - 1].setPrice(+readlineSync.question('Nhap gia moi: '));
            this.goods[id - 1].setAmount(+readlineSync.question('Nhap so luong moi: '));
            this.goods[id - 1].setDescribe(readlineSync.question('Nhap mo ta san pham moi: '));
            return this.goods;
        }
        else {
            return "Không tồn  tại mặt hàng cần update";
        }
    };
    Goodsmanager.prototype["delete"] = function (name) {
        var resigns = [];
        for (var i = 0; i < this.goods.length; i++) {
            if (this.goods[i].getName() == name) {
                console.table(this.goods[i]);
                resigns.push(this.goods.splice(i, 1));
            }
        }
    };
    return Goodsmanager;
}());
exports.Goodsmanager = Goodsmanager;
