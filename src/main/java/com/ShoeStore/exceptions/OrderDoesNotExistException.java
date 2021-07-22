package com.ShoeStore.exceptions;

public class OrderDoesNotExistException extends Exception {
	
	public OrderDoesNotExistException(String msg) {
		super(msg);
	}
}
