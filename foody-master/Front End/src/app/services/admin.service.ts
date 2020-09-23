import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user';
import { Restaurant } from '../model/restaurant';
import { map } from 'rxjs/operators';
import { Food } from '../model/food';

let API_URL = "http://localhost:8080/api/admin/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public cUser: User
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User> (JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

 
  findAllUsers(): Observable<any> {
    return this.http.get(API_URL + "all", {headers: this.headers});
  }

  addRestaurant(restaurant: Restaurant, user: User){
    const headers = new HttpHeaders({
      authorization:'Bearer ' + user.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
    return this.http.post(API_URL+"restaurant",restaurant, {headers: headers});
  }

  updateRestaurant(restaurant: Restaurant, user: User){
    const headers = new HttpHeaders({
      authorization:'Bearer ' + user.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
    return this.http.put(API_URL+"restaurant",restaurant, {headers: headers});
  }

  addFood(food: Food, user: User){
    const headers = new HttpHeaders({
      authorization:'Bearer ' + user.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
    return this.http.post(API_URL+"food",food, {headers: headers});
  }

  updateFood(food: Food, user: User){
    const headers = new HttpHeaders({
      authorization:'Bearer ' + user.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
    return this.http.put(API_URL+"food",food, {headers: headers});
  }

  register(user: User): Observable<any>{
    console.log(user);
    return this.http.post(API_URL + "registration", JSON.stringify(user),
  {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

}
