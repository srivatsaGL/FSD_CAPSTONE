package com.food.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.food.model.Food;

@Repository
public interface FoodDAO extends JpaRepository<Food, Integer>{

	public List<Food> findByName(String name);
}
