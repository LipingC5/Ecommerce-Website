package com.ShoeStore.ShoeStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ShoeStore.ShoeStore.models.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer>{

}
