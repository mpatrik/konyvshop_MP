import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Book} from "../models/Book";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  collectionName = 'Books';
  public search = new BehaviorSubject<string>("");

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

  loadBookMeta(): Observable<Array<Book>> {
    return this.afs.collection<Book>(this.collectionName).valueChanges();
  }

}
