"use strict";
exports.__esModule = true;
exports.menu = void 0;
var goods_1 = require("./goods");
var readlineSync = require("readline-sync");
var main_1 = require("./main");
function menu() {
    console.log('1:Hiển thị danh sách hàng hóa');
    console.log('2:Tìm kiếm hàng hóa theo tên hàng');
    console.log('3:Nhập thông tin mặt hàng mới');
    console.log('4:Chỉnh sửa thông tin một mặt hàng');
    console.log('5:Xóa một mặt hàng khỏi ứng dụng');
}
exports.menu = menu;
var isExist = false;
while (!isExist) {
    menu();
    var number = readlineSync.question('Chon chuc nang: ');
    switch (number) {
        case "1":
            console.table(main_1.goodsManager1.showList());
            break;
        case "2":
            console.table(main_1.goodsManager1.searchByName(readlineSync.question("nhap ten can tim: ")));
            break;
        case "3":
            var id = +readlineSync.question('Nhap id: ');
            var name_1 = readlineSync.question('Nhap ten hang hoa: ');
            var sectors = readlineSync.question('Nhap loai san pham: ');
            var price = +readlineSync.question('Nhap gia: ');
            var amount = +readlineSync.question('Nhap so luong: ');
            var describe = readlineSync.question('Nhap mieu ta: ');
            var goods1 = new goods_1.Goods(id, name_1, sectors, price, amount, describe);
            main_1.goodsManager1.add(goods1);
            console.table(main_1.goodsManager1.showList());
            break;
        case "4":
            var id1 = +readlineSync.question('Nhap id1 muon sua:');
            console.table(main_1.goodsManager1.edit(id1));
            break;
        case "5":
            main_1.goodsManager1["delete"](readlineSync.question("Nhap ten can xoa: "));
            console.table(main_1.goodsManager1.showList());
            break;
    }
}
