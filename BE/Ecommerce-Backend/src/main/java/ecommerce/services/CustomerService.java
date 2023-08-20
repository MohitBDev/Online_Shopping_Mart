package ecommerce.services;

import java.util.List;

import ecommerce.entities.Customer;

public interface CustomerService {
	void registerCustomer(Customer cust);
	List<Customer> allCustomers();
	Customer findById(int id);
	Customer validate(String email,String pwd);
	boolean verifyUserId(String email);
	void updateProfile(Customer cust);
}
