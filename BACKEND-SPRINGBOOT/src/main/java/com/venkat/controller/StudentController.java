package com.venkat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.venkat.model.Student;
import com.venkat.service.StudentService;

@RestController
@CrossOrigin("*")
public class StudentController {
	
	@Autowired
	private StudentService service;
	
	
	@PostMapping("/save")
	public Student createStudent(@RequestBody Student student) 
	{
		Student student1 = service.saveStudent(student);
		return student1;
	}
	
	
	@DeleteMapping(value="/delete/{sid}")
	public void deleteStudent(@PathVariable int sid)
	{
		service.deleteStudent(sid);
	}
	
	
	@GetMapping(value="/getone/{sid}")
	public Student getStudent(@PathVariable int sid)
	{
		Student student1=service.findStudent(sid);
		return student1;
	}
	
	
	@PutMapping(value="/update/{sid}")
	public Student update(@PathVariable int sid,@RequestBody Student st) 
	{
		Student student1=service.updateStudent(sid, st);
		return student1;
	}
	
	
	@GetMapping(value="/viewall")
	public List<Student> findAll()
	{
		List<Student> list = (List<Student>) service.getAll();
		return list;
	}
	
}
