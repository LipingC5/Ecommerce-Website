package com.ShoeStore.ShoeStore;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.ShoeStore.ShoeStore.models.SKUGenerator;
import com.ShoeStore.ShoeStore.models.Shoe;
import com.ShoeStore.ShoeStore.repository.ShoeRepository;

@SpringBootTest
class ShoeStoreApplicationTests {
	
	@Autowired
	ShoeRepository shoeRepository;

	@Test
	void contextLoads() {
	}
	
	@Test
	public void SKUGenerator() {
		String name = "Nike Air Forces 07";
		String brand = "Nike";
		String output ="NIK00-00";
		String actual = SKUGenerator.getInstance().generateSKU(brand);
		assertEquals(output, actual);
	}
	
	@Test
	public void findShoeFromRepository() {
	
	}
	
	@Test
	public void assertingSizeOfRepo() {
		

		
	}

}
