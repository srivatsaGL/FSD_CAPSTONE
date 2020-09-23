package com.food.service;

import java.util.List;

import com.food.model.Food;

public interface FoodService {
	public Food addFood(Food food);
	public List<Food> getAllFood();
	public Food updateFood(Food food);
	public Food getFoodById(int id);
	public void removeFood(int id);
	public List<Food> search(String name);
	public List<Food> sortByPrice();
	public List<Food> sortByPriceDsc();
	public List<Food> sortByName();
	public List<Food> sortByNameDsc();
}
