package com.ShoeStore.ShoeStore.services;

import java.util.List;

import com.ShoeStore.ShoeStore.models.Shoe;
import com.ShoeStore.exceptions.ProductNotFoundException;


public interface ShoeService {
	
	public List<Shoe> addShoe(Shoe shoe, int quantity);
	public List<Shoe> getShoes();
	public Shoe getShoeById(int id) throws ProductNotFoundException;
	public Shoe removeShoeById(int id) throws ProductNotFoundException;
	
}

