import { Component, OnInit } from '@angular/core';
import { books } from '../../shared/constants/books-db';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  headers : string[] = [];
  books_array : any = [];

  constructor() {
    this.headers = ['id', 'title', 'author', 'publisher', 'year', 'pages', 'price'];
    this.books_array = books;

  }



  ngOnInit(): void {
  }


}
