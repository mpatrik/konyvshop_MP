import {Component, OnChanges, OnInit} from '@angular/core';
import {CartService} from "../../shared/services/cart.service";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../shared/models/User";
import {UserService} from "../../shared/services/user.service";
import {Order} from "../../shared/models/Order";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal !: number;

  orderForm = new FormGroup({
    payType: new FormControl(),
    email: new FormControl(),
    name: new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl()
    }),
    address: new FormGroup({
      postCode: new FormControl(),
      city: new FormControl(),
      street: new FormControl(),
      homeNumber: new FormControl()
    }),
  });
  static orderId: number = 1;

  orderSuccess: boolean = false;
  emailFormat: boolean = true;
  missingValues: boolean = true;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
    this.orderSuccess = false;
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptyCart() {
    this.cartService.removeAllCart();
  }

  onOrder() {
    this.emailFormat = true;
    this.missingValues = true;
    if(this.orderForm.get('email')?.value.split('@').length===2 && this.orderForm.get('payType')?.value && this.orderForm.get('name.firstname')?.value && this.orderForm.get('name.lastname')?.value &&
      this.orderForm.get('address.postCode')?.value && this.orderForm.get('address.city')?.value && this.orderForm.get('address.street')?.value && this.orderForm.get('address.homeNumber')?.value) {
      const order: Order = {
        id: CartComponent.orderId,
        payType: this.orderForm.get('payType')?.value,
        email: this.orderForm.get('email')?.value,
        name: {
          firstname: this.orderForm.get('name.firstname')?.value,
          lastname: this.orderForm.get('name.lastname')?.value
        },
        address: {
          postCode: this.orderForm.get('address.postCode')?.value,
          city: this.orderForm.get('address.city')?.value,
          street: this.orderForm.get('address.street')?.value,
          homeNumber: this.orderForm.get('address.homeNumber')?.value
        },
        products: this.products,
        totalPrice: this.grandTotal
      }
      this.cartService.createOrder(order).then(_ => {
        CartComponent.orderId++;
        this.orderSuccess = true;
        this.emptyCart();
        console.log('Order successfully added.');
      }).catch(error => {
        console.error(error);
      });
    } else if (this.orderForm.get('email')?.value.split('@').length!==2) {
      this.emailFormat = false;
      console.error('Email badly formatted.');
    } else {
      this.missingValues = false;
      console.error('Missing values.');
    }
  }
}
