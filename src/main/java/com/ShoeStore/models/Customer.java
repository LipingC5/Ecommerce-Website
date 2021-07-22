package com.ShoeStore.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;

@Entity
public class Customer {
	
	private int id;
	private String name;
	private String email;
	private String number;
	private Cart cart;
	private List<Order> orders = new ArrayList<Order>();
	private ShippingInfo shippingInfo;
	
	public Customer() {}
	
	public Customer(String name, String email, String number) {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}

	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}

	public ShippingInfo getShippingInfo() {
		return shippingInfo;
	}

	public void setShippingInfo(ShippingInfo shippingInfo) {
		this.shippingInfo = shippingInfo;
	}
	
	public Order addOrder(Order order){
		orders.add(order);
		return order;
	}
	
	public Order removeOrder(Order order) {
		orders.remove(order);
		return order;
	}
	
	public Order findOrder(Order order) {
		boolean orderExists = false;
		
		for(int i = 0; i < orders.size(); i++) {
			if(orders.get(i).getOrderNumber() == order.getOrderNumber())
				orderExists = true;
		}
		
		if(orderExists)return order;
		else return null;
	}
	
	
	
}
