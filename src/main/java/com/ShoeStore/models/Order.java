package com.ShoeStore.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;

@Entity
public class Order extends Container {
	
	private long orderNumber;
	private Date date;
	private boolean delivered;
	
	private Customer customer;
	private PaymentForm paymentForm;
	private List<Product> products = new ArrayList<Product>();
	
	public Order() {}
	
	public Order(Customer customer) {
		date = new Date();
		this.customer = customer;
		setProducts(customer.getCart().getProducts());
		setAmount(customer.getCart().getAmount());
		setQuantity(customer.getCart().getQuantity());
		setDelivered(false);
		customer.getCart().clearCart();
		
	}

	public long getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(long orderNumber) {
		this.orderNumber = orderNumber;
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

	public PaymentForm getPaymentForm() {
		return paymentForm;
	}

	public void setPaymentForm(PaymentForm paymentForm) {
		this.paymentForm = paymentForm;
	}

	public boolean isDelivered() {
		return delivered;
	}

	public void setDelivered(boolean delivered) {
		this.delivered = delivered;
	}
	
}
