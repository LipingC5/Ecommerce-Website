package com.ShoeStore.models;

public class Shoe extends Product {
	
	private double size;
	private Cart cart;
	private Order order;
	
	private String color1;
	private String color2;
	private String color3;
	
	public Shoe() {}
	
	public Shoe(String name, double size, String color1, 
	String color2, String color3, String brand) {
		
		this.size = size;
		this.color1 = color1;
		this.color2 = color2;
		this.color3 = color3;
		
		this.setName(name);
		this.setCategory("Shoe");
		this.setInStock(true);
		
	}
	
}
