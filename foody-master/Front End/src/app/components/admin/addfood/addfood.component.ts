import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/model/food';
import { Location } from '@angular/common';
import { Restaurant } from 'src/app/model/restaurant';
import { User } from 'src/app/model/user';
import { AdminService } from 'src/app/services/admin.service';
import { FoodService } from 'src/app/services/food.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {

  foods: any={};
  allfoods: Food[];
  food: any={};
  upFood: Food;
  currentUser: User;
  restaurants: Restaurant[];
  restaurant: Restaurant;
  constructor(private adminService: AdminService, private userService: UserService, private router: Router, private foodService: FoodService, private restService: RestaurantService, private location: Location) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.foodService.getAllFood().subscribe(data=>{
      this.allfoods = data;
    })
    this.restService.getAllRestaurants().subscribe(data=>{
      this.restaurants = data;
    })
  }

  addFood(){
    console.log(this.food);
    this.adminService.addFood(this.food, this.currentUser).subscribe(data=>{
      this.food = data;
      this.router.navigate(['/addfood'])
    });
  }

  updateFood(){
    this.food.restaurant = this.restaurant;
    this.adminService.updateFood(this.food, this.currentUser).subscribe(data=>{
      this.router.navigate(['/addfood'])
      this.refresh();
    })
  }

  refresh(){
    this.router.navigateByUrl("/addfood", {skipLocationChange: true}).then(()=>{
      this.router.navigate([decodeURI(this.location.path())]);
    })
   }
}
