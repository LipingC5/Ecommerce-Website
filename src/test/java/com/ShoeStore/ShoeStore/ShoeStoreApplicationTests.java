package com.ShoeStore.ShoeStore;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import com.ShoeStore.ShoeStore.models.SKUGenerator;

@SpringBootTest
class ShoeStoreApplicationTests {

	@Test
	void contextLoads() {
	}
	
	@Test
	public void SKUGenerator() {
		String name = "Nike Air Forces 07";
		String brand = "Nike";
		String output ="NIK00-00";
		String actual = SKUGenerator.getInstance().generateSKU(name, brand);
		assertEquals(output, actual);
	}

}
