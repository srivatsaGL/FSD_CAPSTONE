import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cart-item';
import { cartUrl } from '../config/api';
import { map } from 'rxjs/operators';
import { FoodService } from './food.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem: CartItem;
  cartId: number = 1;
  results: number;
  constructor(
    private http: HttpClient
  ) { }

  getCartItems():Observable<CartItem[]>{
    return this.http.get<CartItem[]>(cartUrl);
  }

  getCartById(id: number):Observable<CartItem>{
    return this.http.get<CartItem>(cartUrl+"/"+id);
  }
  newCart(cart: CartItem){
    return this.http.post(cartUrl,cart);
  }
}
