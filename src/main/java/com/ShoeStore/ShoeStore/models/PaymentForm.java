package com.ShoeStore.ShoeStore.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class PaymentForm {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String cardNumber;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "order_number")
	@JsonIgnore
	private Order order;
	
	public PaymentForm() {}
	
	public PaymentForm(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}
	
	
}
