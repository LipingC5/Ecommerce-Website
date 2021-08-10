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
