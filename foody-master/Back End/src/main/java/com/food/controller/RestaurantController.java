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

import com.food.model.Restaurant;
import com.food.service.RestaurantService;

@RestController
@CrossOrigin
public class RestaurantController {

	@Autowired
	RestaurantService service;
	
	@PostMapping("/api/admin/restaurant")
	public Restaurant addRestaurant(@RequestBody Restaurant restaurant) {
		// TODO Auto-generated method stub
		return service.addRestaurant(restaurant);
	}

	@GetMapping("/restaurant")
	public List<Restaurant> getAllRestaurants() {
		// TODO Auto-generated method stub
		return service.getAllRestaurants();
	}

	@GetMapping("/restaurant/{id}")
	public Restaurant getRestaurantById(@PathVariable("id") int id) {
		// TODO Auto-generated method stub
		return service.getRestaurantById(id);
	}

	@PutMapping("/api/admin/restaurant")
	public Restaurant updateRestaurant(@RequestBody Restaurant restaurant) {
		// TODO Auto-generated method stub
		return service.updateRestaurant(restaurant);
	}

	@DeleteMapping("/restaurant/{id}")
	public void removeRestaurant(@PathVariable("id") int id) {
		// TODO Auto-generated method stub
		service.removeRestaurant(id);
	}

	@GetMapping("/restaurant/sort/name")
	public List<Restaurant> sortByName() {
		// TODO Auto-generated method stub
		return service.sortByName();
	}

	@GetMapping("/restaurant/sort/city")
	public List<Restaurant> sortByCity() {
		// TODO Auto-generated method stub
		return service.sortByCity();
	}

	@GetMapping("/restaurant/sort/state")
	public List<Restaurant> sortByState() {
		// TODO Auto-generated method stub
		return service.sortByState();
	}

	@GetMapping("/restaurant/sort/name/dsc")
	public List<Restaurant> sortByNameDsc() {
		// TODO Auto-generated method stub
		return service.sortByNameDsc();
	}

	@GetMapping("/restaurant/sort/city/dsc")
	public List<Restaurant> sortByCityDsc() {
		// TODO Auto-generated method stub
		return service.sortByCityDsc();
	}

	@GetMapping("/restaurant/sort/state/dsc")
	public List<Restaurant> sortByStateDsc() {
		// TODO Auto-generated method stub
		return service.sortByStateDsc();
	}

}
