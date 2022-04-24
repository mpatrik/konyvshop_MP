import {Component, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../../shared/models/Book";
import {books} from "../../../shared/constants/books-db";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() bookObject?: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
