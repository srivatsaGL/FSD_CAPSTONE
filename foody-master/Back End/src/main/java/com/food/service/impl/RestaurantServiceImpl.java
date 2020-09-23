package com.food.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.food.DAO.RestaurantDAO;
import com.food.model.Restaurant;
import com.food.service.RestaurantService;

@Service
public class RestaurantServiceImpl implements RestaurantService{

	@Autowired
	RestaurantDAO dao;
	
	@Override
	public Restaurant addRestaurant(Restaurant restaurant) {
		// TODO Auto-generated method stub
		return dao.save(restaurant);
	}

	@Override
	public List<Restaurant> getAllRestaurants() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Restaurant getRestaurantById(int id) {
		// TODO Auto-generated method stub
		return dao.findById(id).get();
	}

	@Override
	public void removeRestaurant(int id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}

	@Override
	public Restaurant updateRestaurant(Restaurant restaurant) {
		// TODO Auto-generated method stub
		return dao.save(restaurant);
	}

	@Override
	public List<Restaurant> sortByName(){
		return dao.findAll(Sort.by("name"));
	}
	
	@Override
	public List<Restaurant> sortByNameDsc(){
		return dao.findAll(Sort.by("name").descending());
	}
	
	@Override
	public List<Restaurant> sortByCity(){
		return dao.findAll(Sort.by("city"));
	}
	
	@Override
	public List<Restaurant> sortByCityDsc(){
		return dao.findAll(Sort.by("city").descending());
	}
	
	@Override
	public List<Restaurant> sortByState(){
		return dao.findAll(Sort.by("state"));
	}
	
	@Override
	public List<Restaurant> sortByStateDsc(){
		return dao.findAll(Sort.by("state").descending());
	}
}
