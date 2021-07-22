package com.ShoeStore.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;

@Entity
public class Cart {
	
	private int id;
	private double amount;
	private int quantity;
	
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

	public double getAmount() {
		return amount;
	}
	
	public void setAmount(double amount) {
		this.amount = amount;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public List<Product> getProducts() {
		return items;
	}

	public void setProducts(List<Product> items) {
		this.items = items;
	}
	
	public Product addItem(Product item) {
		item.setInStock(false);
		setAmount(getTotalCostOfProducts());
		items.add(item);
		setQuantity(items.size());
		return item;
	}
	
	public Product removeItem(Product item) {
		item.setInStock(true);
		setAmount(getTotalCostOfProducts());
		items.add(item);
		setQuantity(items.size());
		return item;
	}
	
	public List<Product> clearCart(){
		items.clear();
		return items;
	}
	
	public double getTotalCostOfProducts(){
		int total = 0;
		for(int i = 0; i < items.size(); i++) {
			total+=items.get(i).getPrice();
		}
		return total;
	}
	
	public int getTotalOfProducts() {
		return items.size();
	}
	
}
