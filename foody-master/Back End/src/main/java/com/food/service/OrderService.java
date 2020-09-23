package com.food.service;

import java.util.List;

import com.food.model.Order;

public interface OrderService {
	public Order addOrder(Order order);
	public List<Order> getAllOrder();
	public Order updateOrder(Order order);
	public void removeOrder(int id);
	public List<Order> getOrderById(int id);
}
