import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant';
import { User } from 'src/app/model/user';
import { AdminService } from 'src/app/services/admin.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

  restaurant: any={};
  restaurants: Restaurant[];
  currentUser: User;
  constructor(private restaurantService: RestaurantService,
    private adminService: AdminService,
    private userService: UserService,
    private router: Router) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
     }

  ngOnInit() {
    this.restaurantService.getAllRestaurants().subscribe(data=>{
      this.restaurants = data;
    })
  }

  updateRestaurant(){
    this.adminService.updateRestaurant(this.restaurant, this.currentUser).subscribe(data=>{
      this.restaurant = data;
      console.log(this.restaurant);
    })
  }

}
