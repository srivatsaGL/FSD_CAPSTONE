import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {

  user: User = new User();
  errorMessage: string;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {

  }

  register() {
    console.log(this.user);
    this.adminService.register(this.user).subscribe(data => {
      console.log(data)
      this.router.navigate(['/adminlogin'])
    }, err => {
      this.errorMessage = "Administrator is already exist.";
    });    
  }
}
