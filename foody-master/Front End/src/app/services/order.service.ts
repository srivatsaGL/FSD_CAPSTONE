import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { orderUrl } from '../config/api'
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  addOrder(order: Order){
    return this.http.post(orderUrl,order);
  }

  updateOrder(order: Order){
    return this.http.put(orderUrl,order);
  }

  getAllOrder():Observable<Order[]>{
    return this.http.get<Order[]>(orderUrl);
  }

  getOrderById(id: number):Observable<Order[]>{
    return this.http.get<Order[]>(orderUrl+"/"+id);
  }
}
