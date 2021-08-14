package com.ShoeStore.ShoeStore.services;

import java.util.List;

import com.ShoeStore.ShoeStore.models.Order;
import com.ShoeStore.ShoeStore.models.PaymentForm;
import com.ShoeStore.exceptions.CartIsEmptyException;
import com.ShoeStore.exceptions.NoResourceFoundException;
import com.ShoeStore.exceptions.OrderDoesNotExistException;

public interface OrderService {
	public Order addOrder(int id, PaymentForm payment) throws NoResourceFoundException, CartIsEmptyException;
	public Order deleteOrder( long orderId)throws NoResourceFoundException;
	public Order getOrderById(long orderId)throws NoResourceFoundException;
	public List<Order> getAllOrders();
}
