package com.crud.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud.Entity.Customer;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, String> {

}
