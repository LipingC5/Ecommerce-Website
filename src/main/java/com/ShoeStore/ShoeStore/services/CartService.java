package com.ShoeStore.ShoeStore.services;

import com.ShoeStore.ShoeStore.models.Cart;
import com.ShoeStore.ShoeStore.models.Product;
import com.ShoeStore.ShoeStore.models.Shoe;
import com.ShoeStore.exceptions.CartIsEmptyException;
import com.ShoeStore.exceptions.NoResourceFoundException;
import com.ShoeStore.exceptions.ProductNotFoundException;

public interface CartService {
	public Cart addShoe(Shoe shoe, int id)throws NoResourceFoundException, ProductNotFoundException;
	public Cart removeShoe(Shoe shoe, int id)throws NoResourceFoundException, ProductNotFoundException;
	public Cart clearCart(int id)throws NoResourceFoundException, CartIsEmptyException, ProductNotFoundException;
}
