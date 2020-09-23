import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { restaurantUrl } from '../config/api'
import { Restaurant } from '../model/restaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getAllRestaurants(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(restaurantUrl);
  }

  getRestaurantById(id: number):Observable<Restaurant>{
    return this.http.get<Restaurant>(restaurantUrl+"/"+id);
  }

  sortByName(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(restaurantUrl+"/sort/name")
  }

  sortByCity(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(restaurantUrl+"/sort/city")
  }

  sortByState(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(restaurantUrl+"/sort/state")
  }

  sortByNameDsc(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(restaurantUrl+"/sort/name/dsc")
  }

  sortByCityDsc(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(restaurantUrl+"/sort/city/dsc")
  }

  sortByStateDsc(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(restaurantUrl+"/sort/state/dsc")
  }
}
