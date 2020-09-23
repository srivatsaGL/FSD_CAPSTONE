package com.food.service;



import com.food.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);

    User findByUsername(String username);

    List<User> findAllUsers();
    User updateCart(User user);
}
