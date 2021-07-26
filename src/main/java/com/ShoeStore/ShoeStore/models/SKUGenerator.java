package com.ShoeStore.ShoeStore.models;


import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

import org.springframework.beans.factory.annotation.Autowired;

import com.ShoeStore.ShoeStore.repository.ShoeRepository;

public class SKUGenerator {
	
	private static SKUGenerator generator = new  SKUGenerator();
	private List<Shoe> shoes;
	private String SKU = "";

	@Autowired
	private ShoeRepository shoeRepository;
	
	
	private SKUGenerator() {
		
	}
	
	public static SKUGenerator getInstance() {
		return generator;
	}
	
	
	public String generateSKU(String name, String brand) {
		

		if(shoeRepository.findAll().size() == 0) {
			SKU = brand.substring(0, 3).toUpperCase() + "00-00";
			return SKU;
		}
		
		for(int i = 0; i < shoeRepository.findAll().size(); i++) {
			if(brand.equals(shoeRepository.findAll().get(i).getBrand())) 
				shoes.add(shoeRepository.findAll().get(i));
		}
		
		if(shoes.size() == 0) {
			SKU = brand.substring(0, 3).toUpperCase() + "00-00";
			return SKU;
		}
		
		for(int i = 0; i < shoes.size(); i++) {
			if(shoes.get(i).getName().equals(name)) {
				SKU = shoes.get(i).getSKU();
			}
		}
		
		// if it is a copy of an item
		if(SKU.length() == 8) {
			int num =  generateNumber(SKU.substring(6, SKU.length()));
			SKU = SKU.substring(6) + num;
		}
		else {
			SKU = shoes.get(shoes.size()-1).getSKU();
			int num = generateNumber(SKU.substring(3, 5));
			num+=1;
			SKU = SKU.substring(0, 3) + num + "-01"; 
		}
		
		return SKU;
	}
	
	public int generateNumber(String str) {
		if(str.charAt(0) == '0') {
			str = "" + str.charAt(1);
			return Integer.parseInt(str);
		}
		else {
			return Integer.parseInt(str);
		}
	}
}
