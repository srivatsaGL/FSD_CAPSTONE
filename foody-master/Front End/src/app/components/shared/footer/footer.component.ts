import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentUser: User;
  loggedin: boolean = false;
  isAdmin: boolean = false;
  role: string = "ADMIN";

  constructor(private router: Router, private userService: UserService, private location: Location) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    if(!this.currentUser){
      this.loggedin = false;
    }else{
      this.loggedin = true;
      this.refresh();
      var index = this.currentUser.role.localeCompare(this.role);
      if(index == 0){
        this.isAdmin = true;
      } else{
        this.isAdmin = false;
      }
    }
  }

  refresh(){
    this.router.navigateByUrl("/foodapp", {skipLocationChange: true}).then(()=>{
      this.router.navigate([decodeURI(this.location.path())]);
    })
   }

}
