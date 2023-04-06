package com.alphahat.main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alphahat.main.model.User;
import com.alphahat.main.repository.UserRepository;
@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public List<User> getAllusers(){
		return userRepository.findAll();
	}
	

}
