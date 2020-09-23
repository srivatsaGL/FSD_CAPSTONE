import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

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
