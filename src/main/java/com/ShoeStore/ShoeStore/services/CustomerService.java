package com.ShoeStore.ShoeStore.services;

import java.util.List;

import com.ShoeStore.ShoeStore.models.Cart;
import com.ShoeStore.ShoeStore.models.Customer;
import com.ShoeStore.ShoeStore.models.Order;
import com.ShoeStore.ShoeStore.models.ShippingInfo;
import com.ShoeStore.exceptions.NoResourceFoundException;
import com.ShoeStore.exceptions.ProductNotFoundException;

public interface CustomerService {
	public Customer addCustomer(Customer customer);
	public List<Customer> getCustomers();
	public Customer getCustomerById(int id)throws NoResourceFoundException;
	public Customer updateCustomer(int id, Customer customer);
	public Cart getCart(int id)throws NoResourceFoundException;
	public List<Order> getOrders(int id)throws NoResourceFoundException;
	public ShippingInfo addShippingInfo(int id, ShippingInfo shippingInfo) throws NoResourceFoundException;
	public ShippingInfo getShippingInfo(int id)throws NoResourceFoundException;
	public ShippingInfo updateShippingInfo(int id, ShippingInfo shippingInfo)throws NoResourceFoundException;
}
