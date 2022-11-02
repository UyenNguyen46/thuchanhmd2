import {Goods} from "./goods";
import {Goodsmanager} from "./goodsmanager";
import * as readlineSync from "readline-sync";
import {menu} from "./menu";

export let goodsManager1: Goodsmanager = new Goodsmanager();
let goods = new Goods(1,"Quan","Quan ao",100,500,"San pham quan jean di choi, di hoc dang cao");
let goods1 = new Goods(2,"Ao thun","Quan ao",200,600,"San pham ao thun day dan");
let goods2 = new Goods(3,"Banh","Thuc pham",50,1000,"Banh osi nhap tu han quoc bao ngon gia re");
let goods3 = new Goods(4,"Keo","Thuc pham",100,700,"Keo dua mien tay sieu dinh ");
let goods4 = new Goods(5,"Son ","Mi pham",700,1000,"Son moi li, khong troi it chi");
let goods5 = new Goods(6,"Phan","Mi pham",200,500,"Phan che khuyet điem hang sieu hot, che mo vet tham");
let goods6 = new Goods(7,"Nhan","Trang suc",600,500,"Nhan bac con gau de thuong");

goodsManager1.add(goods);
goodsManager1.add(goods1);
goodsManager1.add(goods2);
goodsManager1.add(goods3);
goodsManager1.add(goods4);
goodsManager1.add(goods5);
goodsManager1.add(goods6);

