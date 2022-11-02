import {Goods} from "./goods";
import * as readlineSync from "readline-sync";
import {goodsManager1} from "./main";


export function menu() {
    console.log('1:Hiển thị danh sách hàng hóa')
    console.log('2:Tìm kiếm hàng hóa theo tên hàng')
    console.log('3:Nhập thông tin mặt hàng mới')
    console.log('4:Chỉnh sửa thông tin một mặt hàng')
    console.log('5:Xóa một mặt hàng khỏi ứng dụng')
}
let isExist = false;
while (!isExist) {
    menu();
    let number = readlineSync.question('Chon chuc nang: ');
    switch (number) {
        case "1":
            console.table(goodsManager1.showList());
            break;
        case "2":
            console.table(goodsManager1.searchByName(readlineSync.question("nhap ten can tim: ")))
            break;
        case "3":
            let id = +readlineSync.question('Nhap id: ');
            let name = readlineSync.question('Nhap ten hang hoa: ');
            let sectors = readlineSync.question('Nhap loai san pham: ');
            let price = +readlineSync.question('Nhap gia: ');
            let amount = +readlineSync.question('Nhap so luong: ');
            let describe = readlineSync.question('Nhap mieu ta: ');
            let goods1 = new Goods(id , name, sectors, price, amount,describe)
            goodsManager1.add(goods1);
            console.table(goodsManager1.showList());
            break;
        case "4":
            let id1 : number = + readlineSync.question('Nhap id1 muon sua:');
            console.table(goodsManager1.edit(id1))
            break;
        case "5":
            goodsManager1.delete(readlineSync.question("Nhap ten can xoa: "));
            console.table(goodsManager1.showList())
            break;
    }

}
