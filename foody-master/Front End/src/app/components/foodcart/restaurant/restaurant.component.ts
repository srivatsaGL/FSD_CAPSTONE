import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant';
import { User } from 'src/app/model/user';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

   restaurants: Restaurant[];
  currentUser: User;
  name: string;

  constructor(private service: RestaurantService) {
  
   }

  ngOnInit() {
    this.service.getAllRestaurants().subscribe(data=>{
      this.restaurants = data;
    })
  }

  sortByName(){
    this.service.sortByName().subscribe(data=>{
      this.restaurants = data;
    })
  }

  sortByCity(){
    this.service.sortByCity().subscribe(data=>{
      this.restaurants = data;
    })
  }

  sortByState(){
    this.service.sortByState().subscribe(data=>{
      this.restaurants = data;
    })
  }

  sortByNameDsc(){
    this.service.sortByNameDsc().subscribe(data=>{
      this.restaurants = data;
    })
  }

  sortByCityDsc(){
    this.service.sortByCityDsc().subscribe(data=>{
      this.restaurants = data;
    })
  }

  sortByStateDsc(){
    this.service.sortByStateDsc().subscribe(data=>{
      this.restaurants = data;
    })
  }

}
