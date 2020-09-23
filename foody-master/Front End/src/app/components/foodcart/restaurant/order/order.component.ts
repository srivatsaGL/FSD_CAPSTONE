import { Component, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Food } from 'src/app/model/food';
import { User } from 'src/app/model/user';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/model/order';
import { FoodService } from 'src/app/services/food.service';
import { Router } from '@angular/router';
import { MessengerService } from 'src/app/services/messenger.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  registerForm: FormGroup;
  currentUser: User;
  loggedin: boolean = false;
  cartItems: CartItem[]=[];
  foods: Food[]=[];
  cartTotal=0;
  order: any={};
  
  constructor(private userService: UserService,
    private cartService: CartService,
    private router: Router,
    private foodService: FoodService,
    private orderService: OrderService,
    private msg: MessengerService) {
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

  placeOrder(){
    this.order.total = this.cartTotal;
    this.order.userid = this.currentUser.id;
    this.orderService.addOrder(this.order).subscribe(data=>{
      this.order = data;
    })
    this.cartService.getCartItems().subscribe(data=>{
      this.cartItems = data;
      for(let i of data){
        for(let j of i.food ){
          j.qty = 0;
          this.foodService.updateFood(j).subscribe(data=>{
          })
        }
      }
    })
    this.router.navigate(['/summary'])
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
