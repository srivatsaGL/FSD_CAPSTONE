package com.food.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.food.model.Cart;

@Repository
public interface CartDAO extends JpaRepository<Cart, Integer> {

}
