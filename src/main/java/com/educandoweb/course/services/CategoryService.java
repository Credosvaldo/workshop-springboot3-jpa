package com.educandoweb.course.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.educandoweb.course.entities.Category;
import com.educandoweb.course.repositories.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository CategoryRepository;
	
	public List<Category> findAll() {
		return CategoryRepository.findAll();
	}
	
	public Category findById(Long id) {
		return CategoryRepository.findById(id).get();
	}
	
}
