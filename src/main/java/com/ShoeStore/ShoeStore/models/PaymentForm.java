package com.ShoeStore.ShoeStore.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class PaymentForm {
	@Id
	private int id;
	private String cardType;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "order_number")
	@JsonIgnore
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
