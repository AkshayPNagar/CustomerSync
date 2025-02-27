package com.crud.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud.Entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long>{
	
	User findByUsername(String Username);
	

}
