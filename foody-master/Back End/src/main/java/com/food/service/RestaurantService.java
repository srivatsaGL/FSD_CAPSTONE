package com.food.service;

import java.util.List;

import com.food.model.Restaurant;

public interface RestaurantService {
	public Restaurant addRestaurant(Restaurant restaurant);
	public List<Restaurant> getAllRestaurants();
	public Restaurant getRestaurantById(int id);
	public Restaurant updateRestaurant(Restaurant restaurant);
	public void removeRestaurant(int id);
	public List<Restaurant> sortByName();
	public List<Restaurant> sortByCity();
	public List<Restaurant> sortByState();
	public List<Restaurant> sortByNameDsc();
	public List<Restaurant> sortByCityDsc();
	public List<Restaurant> sortByStateDsc();
}
