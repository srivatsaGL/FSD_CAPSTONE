package com.food.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.food.DAO.FoodDAO;
import com.food.model.Food;
import com.food.service.FoodService;

@Service
public class FoodServiceImpl implements FoodService{

	@Autowired
	FoodDAO dao;
	
	@Override
	public Food addFood(Food food) {
		// TODO Auto-generated method stub
		return dao.save(food);
	}

	@Override
	public List<Food> getAllFood() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Food updateFood(Food food) {
		// TODO Auto-generated method stub
		return dao.save(food);
	}

	@Override
	public Food getFoodById(int id) {
		// TODO Auto-generated method stub
		return dao.findById(id).get();
	}

	@Override
	public void removeFood(int id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}
	
	@Override
	public List<Food> search(String name){
		return dao.findByName(name);
	}
	
	@Override
	public List<Food> sortByPrice(){
		return dao.findAll(Sort.by("price").ascending());
	}
	
	@Override
	public List<Food> sortByPriceDsc(){
		return dao.findAll(Sort.by("price").descending());
	}
	
	@Override
	public List<Food> sortByName(){
		return dao.findAll(Sort.by("name").ascending());
	}
	
	@Override
	public List<Food> sortByNameDsc(){
		return dao.findAll(Sort.by("name").descending());
	}
}
