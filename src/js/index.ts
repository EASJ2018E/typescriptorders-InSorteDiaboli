import axios, {
    AxiosResponse,
    AxiosError} from "../../node_modules/axios/index";

import { OrdreLinie } from "../js/OrdreLinie";

import { PrintHTML } from "../js/PrintHTML";

let content:HTMLDivElement = <HTMLDivElement> document.getElementById("content");

let orderlinie:OrdreLinie = new OrdreLinie(1, 4, 2, 200, 0);

let orderlinieprint:string = "Id: " + orderlinie.SalesOrderId + " Antal: " + orderlinie.OrderQty + " Produktid: " + orderlinie.ProductId + " Pris: " + orderlinie.UnitPrice + " Rabat: " + orderlinie.UnitPriceDiscount;

let orderliniemethodprint:string = "Samlet pris: " + orderlinie.BeregnSum() + " Moms: " + orderlinie.Moms() + " Med moms: " + orderlinie.InklMoms();

content.innerText = orderlinieprint;
content.innerText = orderliniemethodprint;