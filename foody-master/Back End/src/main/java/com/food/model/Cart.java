package com.food.model;


import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cartId;
	@OneToMany(mappedBy = "cart")
	private List<Food> food;
	public Cart() {
		// TODO Auto-generated constructor stub
	}
	public int getCartId() {
		return cartId;
	}
	public void setCartId(int cartId) {
		this.cartId = cartId;
	}
	public List<Food> getFood() {
		return food;
	}
	public void setFood(List<Food> food) {
		this.food = food;
	}
}
