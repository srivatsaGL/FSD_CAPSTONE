import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/model/food';
import { FoodService } from 'src/app/services/food.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';
import { CartItem } from 'src/app/model/cart-item';
import { Router } from '@angular/router';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 @Input() foodItem: Food;
 currentUser: User;
 cart: CartItem;
 rcart: CartItem;
 loggedin: boolean = false;
  qty =1;
  constructor(private foodService: FoodService, 
    private cartService: CartService,
    private msg: MessengerService,
    private router: Router,
    private location: Location) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    if(this.currentUser === null){
      this.loggedin = false;
    }else{
      this.loggedin = true;
    }
    this.loadQty();
  }

  loadQty(){
    this.qty=this.foodItem.qty;
  }

  handleAddToCart(){
    this.validateLogin();
    this.foodItem.cart = this.currentUser.cart;
    this.foodItem.qty++;
    this.foodService.updateFood(this.foodItem).subscribe(data=>{
      this.foodItem = data;
      this.refresh();
    })
  }

  removeFromCart(){
    if(this.foodItem.qty ===1){
      this.foodItem.qty--;
      this.foodService.updateFood(this.foodItem).subscribe(data=>{
        this.foodItem = data;
        console.log(this.foodItem);
        this.refresh();
      })
    }else{
      this.foodItem.cart = this.currentUser.cart;
      this.foodItem.qty--;
      this.foodService.updateFood(this.foodItem).subscribe(data=>{
        this.foodItem = data;
        this.refresh();
      })
    }
    
  }

  validateLogin(){
    if(this.currentUser === null){
      this.router.navigate(['/login'])
    }
  }

  refresh(){
    this.router.navigateByUrl("/foodapp", {skipLocationChange: true}).then(()=>{
      this.router.navigate([decodeURI(this.location.path())]);
    })
   }
}
