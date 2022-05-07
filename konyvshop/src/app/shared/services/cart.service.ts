import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Order} from "../models/Order";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  collectionName = 'Orders';

  constructor(private afs: AngularFirestore) { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice() : number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += Number(a.total);
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if(product.id === a.id) {
        this.cartItemList.splice(index,1);
      }
    });
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  createOrder(order: Order) {
    return this.afs.collection<Order>(this.collectionName).doc(String(order.id)).set(order);
  }
}
