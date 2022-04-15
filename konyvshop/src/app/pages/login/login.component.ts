import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {FakeLoadingService} from "../../shared/services/fake-loading.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private loadingService: FakeLoadingService) { }

  ngOnInit(): void {
  }

  async login() {
    // Promise
    /*this.loadingService.loadingWithPromise(this.email.value, this.password.value).then((_: boolean) => {
      this.router.navigateByUrl('/main');
    }).catch(error => {
      console.error(error, 'Helytelen email vagy jelszó!');
    }).finally(() => {
      console.log('This is executed finally.');
    });*/

    // async-await
    /*try {
      const _ = await this.loadingService.loadingWithPromise(this.email.value, this.password.value);
      this.router.navigateByUrl('/main');
    } catch(error) {
      console.error(error, 'Helytelen email vagy jelszó!');
    }
    console.log('This is executed finally.');
    */

    // Observable
    this.loadingService.loadingWithObservable(this.email.value, this.password.value).subscribe((data: number) => {
      console.log(data);
    })

  }





}
