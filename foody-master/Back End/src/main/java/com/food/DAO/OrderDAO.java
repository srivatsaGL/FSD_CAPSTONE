package com.food.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.food.model.Order;

@Repository
public interface OrderDAO extends JpaRepository<Order, Integer>{
	public List<Order> findByUserid(int id);
}
