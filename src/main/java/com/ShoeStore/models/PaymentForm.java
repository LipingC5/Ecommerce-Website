package com.ShoeStore.models;

import javax.persistence.Entity;

@Entity
public class PaymentForm {
	
	private int id;
	private String cardType;
	
	private Order order;
	
	public PaymentForm() {}
	
	public PaymentForm(String cardType) {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCardType() {
		return cardType;
	}

	public void setCardType(String cardType) {
		this.cardType = cardType;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}
	
	
}
