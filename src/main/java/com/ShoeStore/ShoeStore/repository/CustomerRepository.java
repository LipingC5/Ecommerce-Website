package com.ShoeStore.ShoeStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ShoeStore.ShoeStore.models.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}
