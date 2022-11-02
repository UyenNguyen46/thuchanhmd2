export class Goods{
    private _id:number;
    private _name:string;
    private _sectors:string;
    private _price:number;
    private _amount:number;
    private _describe:string;


    constructor(id: number,
                name: string,
                sectors: string,
                price: number,
                amount: number,
                describe: string) {
        this._id = id;
        this._name = name;
        this._sectors = sectors;
        this._price = price;
        this._amount = amount;
        this._describe = describe;
    }

    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }


    setPrice(value: number) {
        this._price = value;
    }


    setAmount(value: number) {
        this._amount = value;
    }

    setDescribe(value: string) {
        this._describe = value;
    }
}
