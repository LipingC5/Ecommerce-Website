package com.ShoeStore.ShoeStore.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.ShoeStore.ShoeStore.models.SKUGenerator;
import com.ShoeStore.ShoeStore.models.Shoe;
import com.ShoeStore.ShoeStore.services.ShoeService;
import com.ShoeStore.exceptions.ProductNotFoundException;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class ShoeController {
	Logger logs = LoggerFactory.getLogger(ShoeController.class);
	
	@Autowired
	ShoeService shoeService;
	
	
	@GetMapping(value ="/shoes")
	public List<Shoe> getShoes() {
		return shoeService.getShoes();
	}
	
	@PostMapping("/shoe/{quantity}")
	@ResponseStatus(HttpStatus.CREATED)
	public List<Shoe> addShoe(@RequestBody@Valid Shoe shoe, @PathVariable int quantity) {
		
		return shoeService.addShoe(shoe, quantity);
	}
	
	@GetMapping("/shoe/{id}")
	public Shoe getShoeById(@PathVariable int id) throws ProductNotFoundException {
		return shoeService.getShoeById(id);
	}
	
}
