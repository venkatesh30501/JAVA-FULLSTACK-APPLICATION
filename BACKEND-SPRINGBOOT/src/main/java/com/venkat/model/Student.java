package com.venkat.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student_details")
public class Student {
	@Id
	private int sid;
	private String studentName;
	private String course;
	private	double fee;
	private int sub1;
	private int sub2;
	private int sub3;
	private	double total;
	private	double percentage;
	private String grade;

	//PDC+PPC+PSM+PGM+toString
	public Student() {
		super();
	}

	public Student(int sid, String studentName, String course, double fee, int sub1, int sub2, int sub3, double total,
			double percentage, String grade) {
		super();
		this.sid = sid;
		this.studentName = studentName;
		this.course = course;
		this.fee = fee;
		this.sub1 = sub1;
		this.sub2 = sub2;
		this.sub3 = sub3;
		this.total = total;
		this.percentage = percentage;
		this.grade = grade;
	}

	public int getSid() {
		return sid;
	}

	public String getStudentName() {
		return studentName;
	}

	public String getCourse() {
		return course;
	}

	public double getFee() {
		return fee;
	}

	public int getSub1() {
		return sub1;
	}

	public int getSub2() {
		return sub2;
	}

	public int getSub3() {
		return sub3;
	}

	public double getTotal() {
		return total;
	}

	public double getPercentage() {
		return percentage;
	}

	public String getGrade() {
		return grade;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public void setCourse(String course) {
		this.course = course;
	}

	public void setFee(double fee) {
		this.fee = fee;
	}

	public void setSub1(int sub1) {
		this.sub1 = sub1;
	}

	public void setSub2(int sub2) {
		this.sub2 = sub2;
	}

	public void setSub3(int sub3) {
		this.sub3 = sub3;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public void setPercentage(double percentage) {
		this.percentage = percentage;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	@Override
	public String toString() {
		return "Student [sid=" + sid + ", studentName=" + studentName + ", course=" + course + ", fee=" + fee
				+ ", sub1=" + sub1 + ", sub2=" + sub2 + ", sub3=" + sub3 + ", total=" + total + ", percentage="
				+ percentage + ", grade=" + grade + "]";
	}
	


}

