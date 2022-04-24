import {Component, OnInit} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {AuthService} from "./shared/services/auth.service";
import {Book} from "./shared/models/Book";
import {books} from "./shared/constants/books-db";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'konyvshop';
  loggedInUser?: firebase.default.User | null;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
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
}
