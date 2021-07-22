package com.ShoeStore.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;

@Entity
public class Order {
	
	private long orderNumber;
	private double amount;
	private Date date;
	private Customer customer;
	private List<Product> products = new ArrayList<Product>();
	
	public Order() {}
	
	public Order(Customer customer, List<Product> products) {
		date = new Date();
	}

	public long getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(long orderNumber) {
		this.orderNumber = orderNumber;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}
	
	public Product addProduct(Product product) {
		products.add(product);
		return product;
	}
	
	public Product removeProduct(Product product) {
		products.remove(product);
		return product;
	}
	
}
