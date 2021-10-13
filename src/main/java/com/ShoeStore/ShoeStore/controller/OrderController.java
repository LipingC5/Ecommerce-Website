package com.ShoeStore.ShoeStore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ShoeStore.ShoeStore.models.Order;
import com.ShoeStore.ShoeStore.models.PaymentForm;
import com.ShoeStore.ShoeStore.services.OrderService;
import com.ShoeStore.exceptions.CartIsEmptyException;
import com.ShoeStore.exceptions.NoResourceFoundException;

@RestController
public class OrderController {
	
	@Autowired
	OrderService orderService;
	
	@PostMapping("/customer/{id}/order/add")
	public List<Order> addOrder(@PathVariable int id, @RequestBody PaymentForm payment) throws NoResourceFoundException, CartIsEmptyException {
		return orderService.addOrder(id, payment);
	}
	@DeleteMapping("/order/{orderId}/delete")
	public List<Order> deleteOrder(@PathVariable long orderId) throws NoResourceFoundException {
		return orderService.deleteOrder(orderId);
	}
	@GetMapping("/order/{id}") 
	public Order getOrderById(@PathVariable long id) throws NoResourceFoundException {
		return orderService.getOrderById(id);
	}
	
	@GetMapping("/orders") 
	public List<Order> getAllOrders(){
		return orderService.getAllOrders();
	}
}
