package com.ShoeStore.ShoeStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ShoeStore.ShoeStore.models.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
