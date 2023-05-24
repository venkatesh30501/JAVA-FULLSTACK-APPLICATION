package com.venkat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.venkat.model.Student;
import com.venkat.repo.StudentRepository;

@Service
public class Service_Class implements StudentService {
	
	@Autowired
	StudentRepository repo;

	@Override
	public Student saveStudent(Student student) 
	{
		Student sn = new Student();
	
		int total = student.getSub1()+student.getSub2()+student.getSub3();
			student.setTotal(total);
			double percentage=total/3;
			student.setPercentage(percentage);
			String grade="";
			
			if((student.getSub1()>=50 && student.getSub1()<=100) && (student.getSub2()>=50 && student.getSub2()<=100) && (student.getSub3()>=50 && student.getSub3()<=100)) 
			{
				if(percentage>=70)
				{
					grade = "A Grade";
					student.setGrade(grade);
				}
				else if(percentage<70 && percentage>=60)
				{
					grade = "B Grade";
					student.setGrade(grade);
				}
				else if(percentage>=50 && percentage<60)
				{
					grade = "C Grade";
					student.setGrade(grade);
				}
			}
			else
			{
				grade = "Fail";
				student.setGrade(grade);
			}
					repo.save(student);
			return student;
		}

	@Override
	public void deleteStudent(int sid) 
	{
		repo.deleteById(sid);
	}

	@Override
	public Student findStudent(int sid) 
	{
		 Student s1=repo.findById(sid).get();
		 return s1;
	}

	@Override
	public Student updateStudent(int sid, Student student) 
	{
		
		Student sn=	repo.findById(sid).get();
		sn.setSid(sid);
		sn.setStudentName(student.getStudentName());
		sn.setCourse(student.getCourse());
		sn.setFee(sn.getFee());
		sn.setSub1(student.getSub1());
		sn.setSub2(student.getSub2());
		sn.setSub3(student.getSub3());
		int total = student.getSub1()+student.getSub2()+student.getSub3();
		sn.setTotal(total);
		
		double percentage=total/3;
		sn.setPercentage(percentage);
		
		String grade="";

		if((student.getSub1()>=50&&student.getSub1()<=100)&&(student.getSub2()>=50&&student.getSub2()<=100)&&(student.getSub3()>=50&&student.getSub3()<=100)) 
		{
			if(percentage>=70)
			{
				grade = "A Grade";
				sn.setGrade(grade);
			}
			else if(percentage>=60 && percentage<70)
			{
				grade = "B Grade";
				sn.setGrade(grade);
			}
			else if(percentage>=50 && percentage<60)
			{
				grade = "C Grade";
				sn.setGrade(grade);
			}
		}

		else
		{
			grade = "Fail";
			sn.setGrade(grade);

		}
		return repo.save(sn);
	}

	@Override
	public List<Student> getAll()
	{
		List<Student> list = (List<Student>) repo.findAll();
		return list;
	}
	
	

}
