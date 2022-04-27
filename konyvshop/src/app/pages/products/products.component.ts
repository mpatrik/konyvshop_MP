import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { books } from '../../shared/constants/books-db';
import {Book} from "../../shared/models/Book";
import {ProductsService} from "../../shared/services/products.service";
import {CartService} from "../../shared/services/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  booksArray: Array<Book>;
  searchKey: string = "";

  constructor(private productService: ProductsService, private cartService: CartService) {
    this.booksArray = books;
  }




  ngOnInit(): void {
    this.booksArray.forEach((a: any) => {
      Object.assign(a,{quantity:1,total:a.price});
    });

    this.productService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }


  addtoCart(item: Book) {
    this.cartService.addtoCart(item);
  }
}
