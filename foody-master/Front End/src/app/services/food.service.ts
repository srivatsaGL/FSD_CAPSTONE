import { Injectable } from '@angular/core';
import { foodUrl } from '../config/api';
import { HttpClient } from '@angular/common/http';
import { Food } from '../model/food';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  updateFood(food: Food){
    return this.http.put<Food>(foodUrl, food);
  }

  getAllFood(): Observable<Food[]>{
    return this.http.get<Food[]>(foodUrl);
  }

  search(name: String):Observable<Food[]>{
    return this.http.get<Food[]>(foodUrl+"/search/"+name);
  }

  sortByPrice():Observable<Food[]>{
    return this.http.get<Food[]>(foodUrl+"/sort/price");
  }

  sortByPriceDsc():Observable<Food[]>{
    return this.http.get<Food[]>(foodUrl+"/sort/price/dsc");
  }

  sortByName():Observable<Food[]>{
    return this.http.get<Food[]>(foodUrl+"/sort/name");
  }

  sortByNameDsc(): Observable<Food[]>{
    return this.http.get<Food[]>(foodUrl+"/sort/name/dsc")
  }

}
