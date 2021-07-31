package com.ShoeStore.ShoeStore.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ShoeStore.ShoeStore.models.Shoe;
import com.ShoeStore.ShoeStore.repository.ShoeRepository;
import com.ShoeStore.exceptions.ProductNotFoundException;

@Service
public class ShoeServiceImpl implements ShoeService {
	
	@Autowired
	private ShoeRepository shoeRepository;

	@Override
	public Shoe addShoe(String name, double size, String color1, String color2, String color3, String color4,
	String brand, double price, char gender, String url) {
		// TODO Auto-generated method stub
		Shoe shoe =  new Shoe(name, size, color1, color2, color3, color4, brand, price, gender);
		shoe.setUrl(url);
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
