import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-foodcart',
  templateUrl: './foodcart.component.html',
  styleUrls: ['./foodcart.component.css']
})
export class FoodcartComponent implements OnInit {

  total: number;
  currentUser: User;

  constructor(private msg: MessengerService, private router: Router) { }

  ngOnInit() {
    if(this.currentUser){
      this.router.navigate(['/login']);
    }
  }

}
