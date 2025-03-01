package com.crud.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="customer")
public class Customer {
	
	
	private long id;
	
	private String name;

	private String lastName;
	
		
	private String email;
	
	@Id
	private String phone;
	
	private String gender;
	
	private String address;
	
	
	
	

}
