package com.ShoeStore.ShoeStore.services;

import java.util.List;

import com.ShoeStore.ShoeStore.models.Shoe;
import com.ShoeStore.exceptions.ProductNotFoundException;


public interface ShoeService {
	
	public Shoe addShoe(String name, double size, String color1, 
    String color2, String color3, String color4, String brand, 
    double price, char gender, String url);
	
	public List<Shoe> addShoe(Shoe shoe, int quantity);
	public List<Shoe> getShoes();
	public Shoe getShoeById(int id) throws ProductNotFoundException;
	public Shoe removeShoeById(int id) throws ProductNotFoundException;
	public List <Shoe> addCopy(int id, int quantity) throws ProductNotFoundException;
	
}

