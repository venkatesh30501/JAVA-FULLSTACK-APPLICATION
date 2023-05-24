package com.venkat.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.venkat.model.Student;

@Repository
public interface StudentRepository extends CrudRepository<Student, Integer> {

}
