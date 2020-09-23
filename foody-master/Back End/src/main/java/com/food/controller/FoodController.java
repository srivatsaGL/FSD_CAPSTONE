package com.food.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.food.model.Food;
import com.food.service.FoodService;

@RestController
@CrossOrigin
public class FoodController{

	@Autowired
	FoodService service;
	
	@PostMapping("/api/admin/food")
	public Food addFood(@RequestBody Food food) {
		// TODO Auto-generated method stub
		return service.addFood(food);
	}

	@GetMapping("/food")
	public List<Food> getAllFood() {
		// TODO Auto-generated method stub
		return service.getAllFood();
	}

	@PutMapping("/food")
	public Food updateFood(@RequestBody Food food) {
		return service.updateFood(food);
	}
	
	@GetMapping("food/search/{name}")
	public List<Food> search(@PathVariable("name") String name){
		return service.search(name);
	}
	
	@GetMapping("/food/{id}")
	public Food getFoodById(@PathVariable("id") int id) {
		// TODO Auto-generated method stub
		return service.getFoodById(id);
	}

	@DeleteMapping("/food/{id}")
	public void removeFood(@PathVariable("id") int id) {
		// TODO Auto-generated method stub
		service.removeFood(id);
	}
	
	@GetMapping("/food/sort/price")
	public List<Food> sortByPrice(){
		return service.sortByPrice();
	}

	@GetMapping("/food/sort/price/dsc")
	public List<Food> sortByPriceDsc(){
		return service.sortByPriceDsc();
	}
	
	@GetMapping("/food/sort/name")
	public List<Food> sortByName(){
		return service.sortByName();
	}
	
	@GetMapping("/food/sort/name/dsc")
	public List<Food> sortByNameDsc(){
		return service.sortByNameDsc();
	}
}
