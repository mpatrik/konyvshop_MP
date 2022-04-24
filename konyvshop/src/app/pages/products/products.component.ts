import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { books } from '../../shared/constants/books-db';
import {Book} from "../../shared/models/Book";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  booksArray : Array<Book>;

  constructor() {
    this.booksArray = books;
  }



  ngOnInit(): void {
  }


  putToCart(row: Book) {
    console.log(row);
  }
}
