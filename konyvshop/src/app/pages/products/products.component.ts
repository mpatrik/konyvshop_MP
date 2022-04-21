import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { books } from '../../shared/constants/books-db';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  booksArray : Array<any>;


  constructor() {
    this.booksArray = books;

  }



  ngOnInit(): void {
  }


  putToCart(row: Object) {
    console.log(row);
  }
}
