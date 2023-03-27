import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthService} from "../../shared/services/auth.service";
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
  loginError: boolean = false;

  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }

  async login() {
    this.loading = true;
    this.loginError = false;

    this.authService.login(this.email.value, this.password.value).then(cred => {
      this.router.navigateByUrl('/main');
      this.loading = false;
    }).catch(error => {
      console.error(error);
      this.loading = false;
      this.loginError = true;
    });
  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }


}
