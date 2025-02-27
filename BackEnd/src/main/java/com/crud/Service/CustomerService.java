package com.crud.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.crud.Entity.Customer;
import com.crud.Repository.CustomerRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerService {

	private final CustomerRepo customerRepo ;
	
	
	public Customer addCustomer(Customer customer)
	{
		return customerRepo.save(customer);
	}
	
	public List<Customer> getCustomer()
	{
		
		return customerRepo.findAll();
	}

	

	public Customer getById(String phone) {
		// TODO Auto-generated method stub
		return customerRepo.findById(phone).orElse(null);
	}
	
	public String deleteCustomer(String phone) {
		 
		
		
	try {
		customerRepo.deleteById(phone);
		return "Deleted Succesfull";
		
	} catch (Exception e) {
		
		return "Please enter Id accurate";
	}
	}
	
	
	

	public Customer updateCustomer(String phone, Customer customer) {
		
	Optional<Customer>	optCustomer = customerRepo.findById(phone);
		
		
		if(!optCustomer.isPresent())
		{
			throw new RuntimeException("Customer not found for phone: "+phone);
		}
		
		else {
		
		Customer exCustomer= optCustomer.get();
		exCustomer.setName(customer.getName());
		exCustomer.setLastName(customer.getLastName());
		exCustomer.setPhone(customer.getPhone());
		exCustomer.setEmail(customer.getEmail());
		exCustomer.setAddress(customer.getAddress());
		exCustomer.setGender(customer.getGender());
		
		
	return customerRepo.save(exCustomer);}
	}

	
	
}
