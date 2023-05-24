package com.venkat.service;

import java.util.List;

import com.venkat.model.Student;

public interface StudentService {
	
	public Student saveStudent(Student student);
	public void deleteStudent(int sid);
	public Student findStudent(int sid);
	public Student updateStudent(int sid,Student student);
	public List<Student> getAll();


	


}
