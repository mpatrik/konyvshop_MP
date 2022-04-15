import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {FakeLoadingService} from "../../shared/services/fake-loading.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;

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
    const subscription = this.loadingService.loadingWithObservable(this.email.value, this.password.value).subscribe((data: boolean) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }


}
