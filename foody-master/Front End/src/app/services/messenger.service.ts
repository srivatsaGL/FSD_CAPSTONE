import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Restaurant } from '../model/restaurant';
import { Food } from '../model/food';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  constructor() { }

  sendMsg(restaurant: Restaurant){
    this.subject.next(restaurant); //Triggering an event
  }

  getMsg(){
    return this.subject.asObservable();
  }

  sendFood(food: Food){
    this.subject.next(food);
  }

  getFood(){
    return this.subject.asObservable();
  }

  sendOrder(order: Order){
    console.log(order)
    this.subject.next(order);
  }

  getOrder(){
    return this.subject.asObservable();
  }
}
