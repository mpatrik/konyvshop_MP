import {Component, OnChanges, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/User";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user?: User;


  constructor(private userService: UserService) {  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
      console.log(this.user);
    }, error => {
      console.error(error);
    });
  }

}
