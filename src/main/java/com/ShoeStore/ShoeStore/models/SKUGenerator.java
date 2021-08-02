package com.ShoeStore.ShoeStore.models;


public class SKUGenerator {

	
	private static SKUGenerator generator = new  SKUGenerator();
	private String SKU = "";


	
	private SKUGenerator() {
	
		
	}
	
	public static SKUGenerator getInstance() {
		return generator;
	}
	
	
	public String generateSKU(String brand) {
		SKU = brand;
		SKU = brand.substring(0, 3);
		SKU = SKU.toUpperCase();
		SKU = SKU + generateNumber().substring(0, 2) + "-" + generateNumber().substring(2, 4);
		return SKU;
	}
	
	public String generateSKU(String brand, String duplicate) {
		SKU = brand;
		SKU = brand.substring(0, 3);
		SKU = SKU.toUpperCase();
		SKU = SKU + generateNumber().substring(0, 2) + "-" + generateNumber().substring(2, 4);
		
		if(SKU == duplicate) {
			return generateSKU(brand, duplicate);
		}
		else {
			return SKU;
		}
		
	}
	
	private String generateNumber() {
		int max = 9999, min = 1000;
		return "" +  (int) (Math.random() * ((max - min) + 1) + min);
	}
}
