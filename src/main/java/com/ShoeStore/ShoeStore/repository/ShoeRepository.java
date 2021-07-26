package com.ShoeStore.ShoeStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ShoeStore.ShoeStore.models.Shoe;

public interface ShoeRepository extends JpaRepository<Shoe, String> {
	
}
