package com.ShoeStore.ShoeStore.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ShoeStore.ShoeStore.models.Cart;
import com.ShoeStore.ShoeStore.models.Customer;
import com.ShoeStore.ShoeStore.models.Order;
import com.ShoeStore.ShoeStore.models.ShippingInfo;
import com.ShoeStore.ShoeStore.services.CustomerService;
import com.ShoeStore.exceptions.NoResourceFoundException;

@RestController
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@PostMapping("/customer")
	public Customer addCustomer(@RequestBody@Valid Customer customer) {
		return customerService.addCustomer(customer);
	}
	@GetMapping("/customers")
	public List<Customer> getCustomers(){
		return customerService.getCustomers();
	}
	@GetMapping("/customer/{id}")
	public Customer getCustomerById(@PathVariable int id) throws NoResourceFoundException {
		return customerService.getCustomerById(id);
	}
	@PutMapping("/customer/{id}")
	public Customer updateCustomer(@PathVariable int id, @RequestBody@Valid Customer customer) {
		return customerService.updateCustomer(id, customer);
	}
	
	@GetMapping("/customer/{id}/cart")
	public Cart getCart(@PathVariable int id) throws NoResourceFoundException {
		return customerService.getCart(id);
	}
	@GetMapping("/customer/{id}/orders")
	public List<Order> getOrders(@PathVariable int id) throws NoResourceFoundException{
		return customerService.getOrders(id);
	}
	@GetMapping("/customer/{id}/shippinginfo")
	public ShippingInfo getShippingInfo(@PathVariable int id) throws NoResourceFoundException {
		return customerService.getShippingInfo(id);
	}
	@PutMapping("/customer/{id}/shippinginfo")
	public ShippingInfo updateShippingInfo(@PathVariable int id, @RequestBody@Valid ShippingInfo shippingInfo) 
	throws NoResourceFoundException {
		return customerService.updateShippingInfo(id, shippingInfo);
	}
	
	@PostMapping("/customer/{id}/shippinginfo")
	public ShippingInfo addShippingInfo(@PathVariable int id, @RequestBody@Valid ShippingInfo shippingInfo) 
	throws NoResourceFoundException {
		return customerService.addShippingInfo(id, shippingInfo);
	}
}
