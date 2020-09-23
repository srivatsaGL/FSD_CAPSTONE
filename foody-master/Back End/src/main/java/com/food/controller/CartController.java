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

import com.food.model.Cart;
import com.food.service.CartService;

@RestController
@CrossOrigin
public class CartController{

	@Autowired
	private CartService service;
	
	@PostMapping("/cart")
	public Cart addCart(@RequestBody Cart cart) {
		// TODO Auto-generated method stub
		return service.addCart(cart);
	}

	@PutMapping("/cart")
	public Cart updateCart(@RequestBody Cart cart) {
		// TODO Auto-generated method stub
		return service.updateCart(cart);
	}

	@GetMapping("/cart/{id}")
	public Cart getCartById(@PathVariable("id") int id) {
		// TODO Auto-generated method stub
		return service.getCartById(id);
	}

	@GetMapping("/cart")
	public List<Cart> getAllCarts() {
		// TODO Auto-generated method stub
		return service.getAllCarts();
	}

	@DeleteMapping("/cart/{id}")
	public void removeCart(@PathVariable("id") int id) {
		// TODO Auto-generated method stub
		service.removeCart(id);
	}

}
