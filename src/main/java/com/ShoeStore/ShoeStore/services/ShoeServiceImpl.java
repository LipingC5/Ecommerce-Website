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
	    
		List<Shoe> response = new ArrayList<Shoe>(quantity);
		
		shoe = new Shoe(shoe.getName(), shoe.getSize(), 
		shoe.getColor1(), shoe.getColor2(), shoe.getColor3(), shoe.getColor4(), 
		shoe.getBrand(), shoe.getPrice(),  shoe.getUrl());
		
		String sku = shoe.getSKU();
		
		for(int i = 0; i < shoeRepository.findAll().size(); i++) {
			if(shoeRepository.findAll().get(i).getName().equals(shoe.getName())) {		
				sku = shoeRepository.findAll().get(i).getSKU();
			}
			else if (sku.equals(shoeRepository.findAll().get(i).getSKU())){
				sku = SKUGenerator.getInstance().generateSKU(shoe.getBrand(), sku);
			}
		}
		
		shoe.setSKU(sku);
		
		shoeRepository.save(shoe);
		response.add(shoe);
		
		for(int i = 0; i < quantity - 1; i++) {
			shoe = new Shoe(shoe.getName(), shoe.getSize(), 
			shoe.getColor1(), shoe.getColor2(), shoe.getColor3(), shoe.getColor4(), 
			shoe.getBrand(), shoe.getPrice(), shoe.getUrl(), sku);
			shoe.setSize2(shoe.getSize() + 1.5);
			
			shoeRepository.save(shoe);
			response.add(shoe);
		}
		
		return response;
		
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

}
