package com.czmud.bookclub.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.czmud.bookclub.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	
	Optional<User> findByEmail( String email );
	
	Optional<User> findById( Long id );

}