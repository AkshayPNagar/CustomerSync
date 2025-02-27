package com.crud.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.crud.Entity.Customer;
import com.crud.Service.CustomerService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CustomerController {
	
	@Autowired
	private final CustomerService customerService;
	
	
	@PostMapping("/add-customer")
	public Customer addCustomer(@RequestBody Customer customer)
	{
		return customerService.addCustomer(customer);
	}
	
	@GetMapping("/get-customer")
	public List<Customer >getCustomer()
	{
		return customerService.getCustomer();
			
	}
	
	@PutMapping("/update-customer/{phone}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable String phone,@RequestBody Customer customer)
	{
		 Customer exCustomer= customerService.updateCustomer(phone, customer);
		return ResponseEntity.ok(exCustomer);
	}

	@GetMapping("/get-by-id/{phone}")
	public ResponseEntity<Customer> getById(@PathVariable String phone)
	{
		Customer customer=customerService.getById(phone);
	
		
			return customer==null ? ResponseEntity.notFound().build() :  ResponseEntity.ok(customer);
		
		
		
	}
	
	@DeleteMapping("/remove-customer/{phone}")
	public ResponseEntity<?> deleteCustomer(@PathVariable String phone)
	{
		Customer exCustomer=customerService.getById(phone);
		
		if(exCustomer==null)
		{
			return ResponseEntity.notFound().build();
		}
		
		else {
			
			customerService.deleteCustomer(phone);
			return ResponseEntity.ok().build();
		}
		
//			return exCustomer==null ? ResponseEntity.notFound().build() : customerService.deleteCustomer(phone); ResponseEntity.ok().build();
	}
}
