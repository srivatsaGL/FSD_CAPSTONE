package com.food.service;

import java.util.List;

import com.food.model.Cart;

public interface CartService {
	public Cart addCart(Cart cart);
	public Cart updateCart(Cart cart);
	public Cart getCartById(int id);
	public List<Cart> getAllCarts();
	public void removeCart(int id);
}
