package com.ShoeStore.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;

import com.ShoeStore.exceptions.ProductNotFoundException;

@Entity
public class Cart extends Container {
	
	private int id;
	private Customer customer;
	private List<Product> items = new ArrayList<Product>();
	
	public Cart() {}
	
	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<Product> getProducts() {
		return items;
	}

	public void setProducts(List<Product> items) {
		this.items = items;
	}
	
	public Product addItem(Product item) throws ProductNotFoundException {
		return process(item, false, items);
	}
	
	public Product removeItem(Product item) throws ProductNotFoundException {
		return process(item, true, items);
	}
	
	public List<Product> clearCart(){
		items.clear();
		return items;
	}
	
	
}
