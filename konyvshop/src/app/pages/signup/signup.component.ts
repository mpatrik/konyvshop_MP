import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../shared/models/User";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    rePassword: new FormControl(),
    name: new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl()
    })
  });

  constructor(private location: Location, private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.signUpForm.get('password')?.value===this.signUpForm.get('rePassword')?.value) {
      this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred => {
        console.log(cred);
        const user: User = {
          id: cred.user?.uid as string,
          email: this.signUpForm.get('email')?.value,
          username: this.signUpForm.get('email')?.value.split('@')[0],
          name: {
            firstname: this.signUpForm.get('name.firstname')?.value,
            lastname: this.signUpForm.get('name.lastname')?.value
          }
        };
        this.userService.create(user).then(_ => {
          console.log('User added successfully.');
        }).catch(error => {
          console.error(error);
        });
        this.router.navigateByUrl('/main');
      }).catch(error => {
        console.error(error);
      });
    } else {
      console.error('Password and repassword unmatched.');
    }
  }

  goBack(){
    this.location.back();
  }
}
