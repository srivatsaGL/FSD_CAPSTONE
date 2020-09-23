import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Restaurant } from 'src/app/model/restaurant';
import { User } from 'src/app/model/user';
import { AdminService } from 'src/app/services/admin.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent implements OnInit {

  restaurant: any={};
  currentUser: User;
  rest: any={};
  restaurants: Restaurant[];
  upRestaurant: Restaurant;

  constructor(private restService: RestaurantService,
    private adminService: AdminService, 
    private userService: UserService,
    private location: Location, 
    private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.restService.getAllRestaurants().subscribe(data=>{
      this.restaurants = data;
    })
  }

  addRestaurant(){
    this.adminService.addRestaurant(this.restaurant, this.currentUser).subscribe(data=>{
      this.rest = data;
      this.refresh();
      this.router.navigate(['/foodapp'])
    });
  }

  refresh(){
    this.router.navigateByUrl("/foodapp", {skipLocationChange: true}).then(()=>{
      this.router.navigate([decodeURI(this.location.path())]);
    })
   }

}
