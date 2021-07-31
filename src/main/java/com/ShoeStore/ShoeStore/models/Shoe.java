package com.ShoeStore.ShoeStore.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Shoe")
public class Shoe extends Product {
	
	private double size;
	private char gender;
	private String color1;
	private String color2;
	private String color3;
	private String color4;
	
	public Shoe() {}
	
	public Shoe(String name, double size, String color1, 
	String color2, String color3, String color4, String brand, double price, char gender) {
		
		this.size = size;
		this.color1 = color1;
		this.color2 = color2;
		this.color3 = color3;
		this.color4 = color4;
		this.setName(name);
		this.setSKU(SKUGenerator.getInstance().generateSKU(brand));
		this.setCategory("Shoe");
		this.setInStock(true);
		this.setPrice(price);
		this.setBrand(brand);
		this.setGender(gender);
	}
	
	public Shoe(String name, double size, String color1, String color2, 
	String color3, String color4, String brand, String sku, double price) {
		this.size = size;
		this.color1 = color1;
		this.color2 = color2;
		this.color3 = color3;
		this.color4 = color4;
		this.setName(name);
		this.setSKU(sku);
		this.setCategory("Shoe");
		this.setInStock(true);
		this.setPrice(price);
		this.setBrand(brand);
		this.setGender(gender);
	}

	public double getSize() {
		return size;
	}

	public void setSize(double size) {
		this.size = size;
	}
	
	public char getGender() {
		return gender;
	}

	public void setGender(char gender) {
		this.gender = gender;
	}

	public String getColor1() {
		return color1;
	}

	public void setColor1(String color1) {
		this.color1 = color1;
	}

	public String getColor2() {
		return color2;
	}

	public void setColor2(String color2) {
		this.color2 = color2;
	}

	public String getColor3() {
		return color3;
	}

	public void setColor3(String color3) {
		this.color3 = color3;
	}

	public String getColor4() {
		return color4;
	}

	public void setColor4(String color4) {
		this.color4 = color4;
	}
	
}
