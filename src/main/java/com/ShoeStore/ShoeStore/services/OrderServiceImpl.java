package com.ShoeStore.ShoeStore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ShoeStore.ShoeStore.models.Cart;
import com.ShoeStore.ShoeStore.models.Customer;
import com.ShoeStore.ShoeStore.models.Order;
import com.ShoeStore.ShoeStore.models.PaymentForm;
import com.ShoeStore.ShoeStore.models.Shoe;
import com.ShoeStore.ShoeStore.repository.CartRepository;
import com.ShoeStore.ShoeStore.repository.CustomerRepository;
import com.ShoeStore.ShoeStore.repository.OrderRepository;
import com.ShoeStore.ShoeStore.repository.PaymentFormRepository;
import com.ShoeStore.ShoeStore.repository.ShoeRepository;
import com.ShoeStore.exceptions.CartIsEmptyException;
import com.ShoeStore.exceptions.NoResourceFoundException;
import com.ShoeStore.exceptions.OrderDoesNotExistException;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	CustomerRepository customerRepository;
	
	@Autowired
	CartRepository cartRepository;
	
	@Autowired
	ShoeRepository shoeRepository;
	
	@Autowired
	OrderRepository orderRepository;
	
	@Autowired
	PaymentFormRepository paymentFormRepository;
	
	
	@Override
	public List <Order> addOrder(int id, PaymentForm payment) throws NoResourceFoundException, CartIsEmptyException {
		// TODO Auto-generated method stub
		Customer customer = customerRepository.findById(id).orElse(null);
		if(customer == null) {
			throw new NoResourceFoundException("Customer Does Not Exist");
		}
		
		Order order = new Order(customer);
		payment.setOrder(order);
		order.setPaymentForm(payment);
		
		order = customer.getOrders().get(customer.getOrders().size()-1);
		Shoe shoe = null;
		for(int i = 0; i < order.getProducts().size(); i++) {
			if( order.getProducts().get(i).getCategory().equals("shoe")) {
				shoe = (Shoe)order.getProducts().get(i);
				shoe.setCart(null);
				shoeRepository.save(shoe);
			}
		}
		
		cartRepository.delete(customer.getCart());
		Cart newCart = new Cart();
		customer.setCart(newCart);
		newCart.setCustomer(customer);
		cartRepository.save(customer.getCart());
		
		
		if(order.getQuantity() == 0) {
			throw new CartIsEmptyException("Cart Is Empty");
		}
		paymentFormRepository.save(payment);
		
		orderRepository.save(order);
		
		for(int i = 0; i < order.getProducts().size(); i++) {
			if( order.getProducts().get(i).getCategory().equals("shoe")) {
				shoe = (Shoe)order.getProducts().get(i);
				shoe.setOrder(order);
				shoeRepository.save(shoe);
			}
		}
		
		return customer.getOrders();
	}

	@Override
	public List<Order> deleteOrder(long orderId) throws NoResourceFoundException {
		// TODO Auto-generated method stub

		Order order = orderRepository.findById(orderId).orElse(null);
		
		if(order == null) {
			throw new NoResourceFoundException("Order Does Not Exist");
		}
		
		Shoe shoe = null;
		for(int i = 0; i < order.getProducts().size(); i++) {
			if(order.getProducts().get(i).getCategory().equals("shoe")) {
				
				shoe = (Shoe) order.getProducts().get(i);
				shoe.setInStock(true);
				shoe.setOrder(null);
				shoeRepository.save(shoe);
			}
		}
		Customer customer = order.getCustomer();
		orderRepository.deleteById(order.getOrderNumber());
		customer.getOrders().remove(order);
		order.setCustomer(null);
		customerRepository.save(customer);
		paymentFormRepository.delete(order.getPaymentForm());
		
		return customer.getOrders();
	}

	@Override
	public Order getOrderById(long orderId) throws NoResourceFoundException {
		// TODO Auto-generated method stub
		Order order = orderRepository.findById(orderId).orElse(null);
	   
		if(order == null) throw new NoResourceFoundException("Order Does Not Exist");
		
		return order;
	}

	@Override
	public List<Order> getAllOrders() {
		// TODO Auto-generated method stub
		
		return orderRepository.findAll();
	}

	@Override
	public List<Order> getCustomerOrders(int id) throws NoResourceFoundException {
		// TODO Auto-generated method stub
		Customer customer = customerRepository.findById(id).orElse(null);
		if(customer == null) {
			throw new NoResourceFoundException("Customer Does Not Exist");
		}
		return customer.getOrders();
	}

}