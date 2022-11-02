import {Goods} from "./goods";
import * as readlineSync from "readline-sync";

export class Goodsmanager{
    goods: Goods[]=[]

    constructor() {
    }
    showList() {
        return this.goods
    }
    searchByName(name: string) {
        let names = []
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].getName() == name) {
                names.push(this.goods[i]);
            }
        }
        return names;
    }

    add(staff: Goods) {
        this.goods.push(staff)
    }
   edit(id){
               if(this.goods[id-1].getId() == id){
                   this.goods[id-1].setName(readlineSync.question('Nhap ten moi: '))
                   this.goods[id-1].setId(+readlineSync.question('Nhap id moi: '))
                   this.goods[id-1].setPrice(+readlineSync.question('Nhap gia moi: '))
                   this.goods[id-1].setAmount(+readlineSync.question('Nhap so luong moi: '))
                   this.goods[id-1].setDescribe(readlineSync.question('Nhap mo ta san pham moi: '))
                   return this.goods
               }else {
                   return "Không tồn  tại mặt hàng cần update"
               }

       }
    delete(name) {
        let resigns = [];
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].getName() == name) {
                console.table(this.goods[i]);
                resigns.push(this.goods.splice(i, 1));
            }
        }
    }
}