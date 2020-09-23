import { Component, Input, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import { MessengerService } from 'src/app/services/messenger.service';
import { Food } from 'src/app/model/food';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/model/cart-item';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  cartItems: CartItem[];
  foods: Food[]=[];
  cartTotal=0;
  loggedin: boolean = false;
  currentUser: User;

  constructor(private userService: UserService, 
    private router: Router,
    private cartService: CartService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  
  ngOnInit() {
    if(this.currentUser === null){
      this.loggedin = false;
    }else{
      this.loggedin = true;
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
    this.foods.forEach(j=>{
      this.cartTotal += (j.qty * j.price)
    }) 
  }

  logOut(){
    this.userService.logOut().subscribe(data => {
      this.loggedin = false;
    });
  }

}
