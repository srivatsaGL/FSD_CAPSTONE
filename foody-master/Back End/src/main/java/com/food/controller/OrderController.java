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

import com.food.model.Order;
import com.food.service.OrderService;

@RestController
@CrossOrigin
public class OrderController {

	@Autowired
	OrderService service;
	
	@PostMapping("/order")
	public Order addOrder(@RequestBody Order order) {
		// TODO Auto-generated method stub
		return service.addOrder(order);
	}

	@GetMapping("/order")
	public List<Order> getAllOrder() {
		// TODO Auto-generated method stub
		return service.getAllOrder();
	}

	@PutMapping("/order")
	public Order updateOrder(Order order) {
		// TODO Auto-generated method stub
		return service.updateOrder(order);
	}

	@DeleteMapping("/order/{id}")
	public void removeOrder(@PathVariable("id") int id) {
		// TODO Auto-generated method stub
		service.removeOrder(id);
	}

	@GetMapping("/order/{id}")
	public List<Order> getOrderById(@PathVariable("id") int id) {
		// TODO Auto-generated method stub
		return service.getOrderById(id);
	}

}
