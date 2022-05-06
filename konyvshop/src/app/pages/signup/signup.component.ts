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

  emailFormat: boolean = true;
  passMatch: boolean = true;
  missingValues: boolean = true;

  constructor(private location: Location, private authService: AuthService, private router: Router, private userService: UserService) { }


  ngOnInit(): void {
  }

  onSubmit() {
    this.emailFormat = true;
    this.passMatch = true;
    this.missingValues = true;
    if(this.signUpForm.get('password')?.value===this.signUpForm.get('rePassword')?.value && this.signUpForm.get('email')?.value.split('@').length===2
      && this.signUpForm.get('name.firstname')?.value && this.signUpForm.get('name.lastname')?.value) {
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
    } else if(this.signUpForm.get('email')?.value.split('@').length!==2) {
        console.error('Email badly formatted.');
        this.emailFormat = false;
    } else if(this.signUpForm.get('password')?.value!==this.signUpForm.get('rePassword')?.value) {
        console.error('Password and repassword unmatched.');
        this.passMatch = false;
    } else {
        console.error('Missing values.');
        this.missingValues = false;
    }
  }

  goBack(){
    this.location.back();
  }
}
