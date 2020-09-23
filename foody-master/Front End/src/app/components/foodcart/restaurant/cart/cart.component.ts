import { Component, OnInit, Output } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Food } from 'src/app/model/food';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  currentUser: User;
  cartItems: CartItem[]=[];
  isloggedin: boolean = false;
  foods: Food[]=[];
  cartItem: CartItem;
  cartTotal: number = 0;
  constructor(
    private cartService: CartService,
    private router: Router, private location: Location) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

   refresh(){
    this.router.navigateByUrl("/foodapp", {skipLocationChange: true}).then(()=>{
      this.router.navigate([decodeURI(this.location.path())]);
    })
   }
  ngOnInit() {
    if(this.currentUser === null){
      this.isloggedin = false;
    }else{
      this.isloggedin = true;
    }
    this.getCartItem();
  }

  getCartItem(){
    this.cartService.getCartItems().subscribe(data=>{
      this.cartItems = data;
      for(let i of data){
        for(let j of i.food ){
          this.foods.push(j);
        } 
        this.calcCartTotal();
      }
    })
  }

  calcCartTotal(){
    this.cartItems.forEach(item=> {
      item.food.forEach(j=>{
        this.cartTotal += (j.qty * j.price)
      })
      
      })
  }
}
