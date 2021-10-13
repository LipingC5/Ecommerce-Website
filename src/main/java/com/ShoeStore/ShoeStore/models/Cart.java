package com.ShoeStore.ShoeStore.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.ShoeStore.exceptions.ProductNotFoundException;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Cart")
public class Cart extends Container {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customer_id")
	@JsonIgnore
	private Customer customer;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "cart")
	private List<Product> products = new ArrayList<Product>();
	
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
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}
	
	public Product addItem(Product item) throws ProductNotFoundException {
		return process(item, false, products);
	}
	
	public Product removeItem(Product item) throws ProductNotFoundException {
		return process(item, true, products);
	}
	
	public List<Product> clearCart(){
		products.clear();
		this.setAmount(0);
		this.setQuantity(0);
		return products;
	}
	
	
}
