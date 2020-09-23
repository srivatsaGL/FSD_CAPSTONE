import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedin: boolean = false;
  isAdmin: boolean = false;
  role: string = "ADMIN";
  currentUser: User;

  constructor(private userService: UserService, 
    private router: Router, 
    private location: Location,
    private adminService: AdminService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
  }

  ngOnInit() {
    if(!this.currentUser){
      this.loggedin = false;
      this.refresh();
    }else{
      this.loggedin = true;
      var index = this.currentUser.role.localeCompare(this.role);
      if(index == 0){
        this.isAdmin = true;
      } else{
        this.isAdmin = false;
      }
    }
  }

  reload(){
    let win = (window as any);
      if(win.location.search !== '?loaded' ) {
          win.location.search = '?loaded';
          win.location.reload();
      }
    }

    refresh(){
      this.router.navigateByUrl("/foodapp", {skipLocationChange: true}).then(()=>{
        this.router.navigate([decodeURI(this.location.path())]);
      })
     }

  logOut(){
    this.userService.logOut().subscribe(data => {
      this.loggedin = false;
      this.refresh();
    });
  }

}
