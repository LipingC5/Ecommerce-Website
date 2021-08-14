package com.ShoeStore.ShoeStore.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ShoeStore.ShoeStore.models.Cart;
import com.ShoeStore.ShoeStore.models.Product;
import com.ShoeStore.ShoeStore.models.Shoe;
import com.ShoeStore.ShoeStore.services.CartService;
import com.ShoeStore.exceptions.CartIsEmptyException;
import com.ShoeStore.exceptions.NoResourceFoundException;
import com.ShoeStore.exceptions.ProductNotFoundException;

@RestController  
public class CartController {
	
	@Autowired
	CartService cartService;
	
	@PutMapping("/customer/{id}/cart/addshoe")
	public Cart addShoe(@RequestBody@Valid Shoe shoe, @PathVariable int id) throws NoResourceFoundException, 
	ProductNotFoundException {
		return cartService.addShoe(shoe, id);
	}
	
	@PutMapping("/customer/{id}/cart/removeshoe")
	public Cart removeShoe(@RequestBody@Valid Shoe shoe, @PathVariable int id) throws NoResourceFoundException, 
	ProductNotFoundException {
		return cartService.removeShoe(shoe, id);
	}
	
	@PutMapping("/customer/{id}/cart/clear")
	public Cart removeAllProducts(@PathVariable int id) throws NoResourceFoundException, 
	CartIsEmptyException, ProductNotFoundException{
		return cartService.clearCart(id);
	}
}
