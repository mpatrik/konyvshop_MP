import {Component, OnInit} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {AuthService} from "./shared/services/auth.service";
import {Book} from "./shared/models/Book";
import {books} from "./shared/constants/books-db";
import {CartService} from "./shared/services/cart.service";
import {ProductsService} from "./shared/services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'konyvshop';
  loggedInUser?: firebase.default.User | null;
  public totalItem: number = 0;
  //searchTerm: string = '';

  constructor(private authService: AuthService, private cartService: CartService, private productsService: ProductsService) {
  }

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
    this.cartService.getProducts().subscribe(res => {
      this.totalItem = res.length;
    })
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav) {
    if (event === true) {
      sidenav.close();
    }
  }

  logout(_?: boolean) {
    this.authService.logout().then(() => {
      console.log('Sikeres kijelentkezés.');
    }).catch(error => {
      console.error(error);
    });
  }

  /*search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.productsService.search.next(this.searchTerm);
  }*/
}
