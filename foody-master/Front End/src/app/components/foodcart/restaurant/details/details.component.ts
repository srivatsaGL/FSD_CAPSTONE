import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurant } from 'src/app/model/restaurant';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/model/food';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,OnDestroy {

  name: string;
  id: number;
  private sub: any;
  food: Food[]=[];
  
   restaurant: Restaurant;
  constructor(private router: ActivatedRoute, 
    private service: RestaurantService,
    private foodService: FoodService) {
    this.restaurant = new Restaurant();
   }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.id = +params['id'];
      this.getProduct();
      this.getFoodItems();
    });
  }

  getProduct(){
    this.service.getRestaurantById(this.id).subscribe(data=>{
      this.restaurant = data;
    })
  }

  getFoodItems(){
    this.foodService.getAllFood().subscribe((data)=>{
      for(let item of data){
        if(this.restaurant.rid === item.restaurant.rid){
          this.food.push(item);
        }
      }
    })
  }

  search(){
    this.foodService.search(name).subscribe(data=>{
      this.food = data;
    })
  }

  sortByPrice(){
    this.foodService.sortByPrice().subscribe(data=>{
      this.food = data;
    })
  }

  sortByPriceDsc(){
    this.foodService.sortByPriceDsc().subscribe(data=>{
      this.food = data;
    })
  }

  sortByName(){
    this.foodService.sortByName().subscribe(data=>{
      this.food = data;
    })
  }

  sortByNameDsc(){
    this.foodService.sortByNameDsc().subscribe(data=>{
      this.food = data;
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
