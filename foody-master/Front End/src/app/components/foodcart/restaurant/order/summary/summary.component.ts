import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { User } from 'src/app/model/user';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  currentUser: User;

  order: Order[]=[];
  constructor(private service: OrderService,
    private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.service.getOrderById(this.currentUser.id).subscribe(data=>{
      this.order = data;
    })
  }
}
