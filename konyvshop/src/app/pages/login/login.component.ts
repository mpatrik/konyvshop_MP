import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {FakeLoadingService} from "../../shared/services/fake-loading.service";
import {Observable, Subscription} from "rxjs";
import {AuthService} from "../../shared/services/auth.service";
import {User} from "../../shared/models/User";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;

  loading: boolean = false;
  private loadingObservation?: Observable<boolean>;

  constructor(private router: Router, private loadingService: FakeLoadingService, private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }

  async login() {
    this.loading = true;
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
    /*this.loadingObservation = this.loadingService.loadingWithObservable(this.email.value, this.password.value);
    this.loadingSubscription = this.loadingObservation
      .subscribe(
        { next: (data: boolean) => {
          this.router.navigateByUrl('/main');
          }, error: (error) => {
            console.error(error);
            this.loading = false;
          }, complete: () => {
            console.log('finally');
            this.loading = false;
          }
    });*/

    this.authService.login(this.email.value, this.password.value).then(cred => {
      this.router.navigateByUrl('/main');
      this.loading = false;
    }).catch(error => {
      console.error(error);
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }


}
