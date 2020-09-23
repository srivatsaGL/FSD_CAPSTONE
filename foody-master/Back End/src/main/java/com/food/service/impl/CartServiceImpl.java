package com.food.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.DAO.CartDAO;
import com.food.model.Cart;
import com.food.service.CartService;

@Service
public class CartServiceImpl implements CartService{

	@Autowired
	private CartDAO dao;
	
	@Override
	public Cart addCart(Cart cart) {
		// TODO Auto-generated method stub
		return dao.save(cart);
	}

	@Override
	public Cart updateCart(Cart cart) {
		// TODO Auto-generated method stub
		return dao.save(cart);
	}

	@Override
	public Cart getCartById(int id) {
		// TODO Auto-generated method stub
		return dao.findById(id).get();
	}

	@Override
	public List<Cart> getAllCarts() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public void removeCart(int id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}

}
