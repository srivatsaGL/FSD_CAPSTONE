import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  errorMessage: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if(this.userService.currentUserValue) {
      this.router.navigate(['']);
      return;
    }
  }

  login() {
    this.userService.login(this.user).subscribe(data => {
      this.reload();
      this.router.navigate(['']);
    }, err => {
      this.errorMessage = "Username or password is incorrect";
    });
  }

  reload(){
    let win = (window as any);
      if(win.location.search !== '?loaded' ) {
          win.location.search = '?loaded';
          win.location.reload();
      }
  }
}
