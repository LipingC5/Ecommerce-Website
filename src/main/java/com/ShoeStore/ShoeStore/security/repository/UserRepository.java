package com.ShoeStore.ShoeStore.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ShoeStore.ShoeStore.security.models.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByUserName(String userName);
}