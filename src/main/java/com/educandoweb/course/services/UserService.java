package com.educandoweb.course.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.educandoweb.course.entities.User;
import com.educandoweb.course.repositories.UserRepository;
import com.educandoweb.course.services.exeptions.DataBaseExeption;
import com.educandoweb.course.services.exeptions.ResourceNotFoundExeption;

import jakarta.persistence.EntityNotFoundException;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public List<User> findAll() {
		return userRepository.findAll();
	}

	public User findById(Long id) {
		return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundExeption(id));
	}

	public User insert(User obj) {
		return userRepository.save(obj);
	}

	public void delete(Long id) {
		try {
			userRepository.deleteById(id);
			log.info("É FOI COMPLETO");
		} catch (DataIntegrityViolationException e) {
			throw new DataBaseExeption(e.getMessage());
		}

		log.info("OK");
	}

	public User update(Long id, User obj) {


		try {
			User entity = userRepository.getReferenceById(id);

			updateData(entity, obj);

			return userRepository.save(entity);
		}
		catch (EntityNotFoundException e) {
			throw new ResourceNotFoundExeption(id);
		}


	}

	private void updateData(User entity, User obj) {
		entity.setName(obj.getName());
		entity.setEmail(obj.getEmail());
		entity.setPhone(obj.getPhone());

	}

}
