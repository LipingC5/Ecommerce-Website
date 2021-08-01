package com.ShoeStore.ShoeStore.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.ShoeStore.ShoeStore.models.SKUGenerator;
import com.ShoeStore.ShoeStore.models.Shoe;
import com.ShoeStore.ShoeStore.repository.ShoeRepository;
import com.ShoeStore.exceptions.ProductNotFoundException;

@Service
public class ShoeServiceImpl implements ShoeService {
	
	@Autowired
	private ShoeRepository shoeRepository;
	
	@Override
	public List<Shoe> addShoe(Shoe shoe,int  quantity) {
		// TODO Auto-generated method stub
	    //shoe.setSKU(SKUGenerator.getInstance().generateSKU(shoe.getBrand()));
		shoe = new Shoe(shoe.getName(), shoe.getSize(), 
		shoe.getColor1(), shoe.getColor2(), shoe.getColor3(), shoe.getColor4(), 
		shoe.getBrand(), shoe.getPrice(), shoe.getGender(), shoe.getUrl());
		
		String sku = shoe.getSKU();
		
		for(int i = 0; i < shoeRepository.findAll().size(); i++) {
			if(shoeRepository.findAll().get(i).getName() == shoe.getName()) {
				sku = shoeRepository.findAll().get(i).getSKU();
			}
		}
		
		shoeRepository.save(shoe);
		
		for(int i = 0; i < quantity - 1; i++) {
			shoe = new Shoe(shoe.getName(), shoe.getSize(), 
			shoe.getColor1(), shoe.getColor2(), shoe.getColor3(), shoe.getColor4(), 
			shoe.getBrand(), shoe.getPrice(), shoe.getGender(), shoe.getUrl(), sku);
			
			shoeRepository.save(shoe);
			
		}
		return shoeRepository.findAll();
	
	}

	@Override
	public Shoe addShoe(String name, double size, String color1, String color2, String color3, String color4,
	String brand, double price, char gender, String url) {
		// TODO Auto-generated method stub
		Shoe shoe =  new Shoe(name, size, color1, color2, color3, color4, brand, price, gender, url);
		
		shoeRepository.save(shoe);
		return shoe;
	}
	

	@Override
	public List<Shoe> getShoes() {
		// TODO Auto-generated method stub
		return shoeRepository.findAll();
	}

	@Override
	public Shoe getShoeById(int id) throws ProductNotFoundException {
		// TODO Auto-generated method stub
		Shoe shoe = shoeRepository.findById(id).orElse(null);
		if(shoe == null)
			throw new ProductNotFoundException("Product Not Found");
		else
			return shoe;
	}

	@Override
	public Shoe removeShoeById(int id) throws ProductNotFoundException {
		// TODO Auto-generated method stub
		Shoe shoe = shoeRepository.findById(id).orElse(null);
		if(shoe == null) {
			throw new ProductNotFoundException("Product Not Found");
		}
		else {
			shoeRepository.delete(shoe);
			return shoe;
		}
	}

	@Override
	public List<Shoe> addCopy(int id, int quantity) throws ProductNotFoundException {
		// TODO Auto-generated method stub
		Shoe shoe = shoeRepository.findById(id).orElse(null);
		List<Shoe> list = new ArrayList<Shoe>();
		if(shoe == null) {
			throw new ProductNotFoundException("Product Not Found");
		}
		else {
			
			for(int i = 0; i < quantity; i++) {
				shoeRepository.save(shoe);
				list.add(shoe);
			}
			
			return list;
		}
	}


	
	


}
