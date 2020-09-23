package com.food.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.DAO.OrderDAO;
import com.food.model.Order;
import com.food.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService{

	@Autowired
	OrderDAO dao;
	
	@Override
	public Order addOrder(Order order) {
		// TODO Auto-generated method stub
		return dao.save(order);
	}

	@Override
	public List<Order> getAllOrder() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Order updateOrder(Order order) {
		// TODO Auto-generated method stub
		return dao.save(order);
	}

	@Override
	public void removeOrder(int id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}

	@Override
	public List<Order> getOrderById(int id) {
		// TODO Auto-generated method stub
		return dao.findByUserid(id);
	}

}
