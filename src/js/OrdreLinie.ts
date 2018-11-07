import { IOrdreLinie } from '../js/IOrdrelinie';

export class OrdreLinie {
    SalesOrderId:number;
    OrderQty:number;
    ProductId:number;
    UnitPrice:number;
    UnitPriceDiscount:number;
    constructor (salesorderid:number, orderqty:number, productid:number, unitprice:number, unitpricediscount:number)
    {
        this.SalesOrderId = salesorderid;
        this.OrderQty = orderqty;
        this.ProductId = productid;
        this.UnitPrice = unitprice;
        this.UnitPriceDiscount = unitpricediscount;
    }

    BeregnSum():number {
        return this.OrderQty*(this.UnitPrice-this.UnitPriceDiscount);
    }
    
    Moms():number {
        return this.BeregnSum() * 0.25;
    }
    
    InklMoms():number {
        return this.BeregnSum() + this.Moms();
    }
}

