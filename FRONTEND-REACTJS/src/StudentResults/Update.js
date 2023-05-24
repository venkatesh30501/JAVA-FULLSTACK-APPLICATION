import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";




const Update = () => {


  const shcema = yup.object().shape({

    sid: yup
      .number()
      .typeError('Student ID is required')
      .max(1000, 'Student ID should be 4 numarics'),
    // .string()
    // .required('Student ID is required')
    // .matches(/^\d+$/, 'Student ID must be a numeric value')
    // .length(4, 'Student ID must be exactly 4 digits'),
    studentName: yup
      .string()
      .required('Student Name is required')
      .matches(/^[A-Z][A-Za-z\s]/, 'Student Name should start with uppercase')
      .min(6, 'Student Name should minimum 6 characters')
      .max(50, 'Student Name should less than 12 characters'),
    course: yup
      .string()
      .required('Course Name is required')
      .matches(/^[A-Z][A-Za-z\s]/, 'Course Name should start with uppercase')
      .min(6, 'Course Name should minimum 6 characters')
      .max(50, 'Course Name should less than 50 characters'),
    fee: yup
      .number()
      .typeError('Fee is required')
      .required('Fee is required')
      // .matches(/^[2-9][0-9\.]/,'Fee should start with 20000')
      .min(20000, 'Fee should start with 20000'),
    sub1: yup
      .number()
      .typeError('Subject 1 marks is required')
      .required('Subject 1 marks is required')
      .min(0, 'Subject 1 marks must be greater than or equal to 0')
      .max(100, 'Subject 1 marks must be less than or equal to 100'),
    sub2: yup
      .number()
      .typeError('Subject 2 marks is required')
      .required('Subject 2 marks is required')
      .min(0, 'Subject 2 marks must be greater than or equal to 0')
      .max(100, 'Subject 2 marks must be less than or equal to 100'),
    sub3: yup
      .number()
      .typeError('Subject 3 marks is required')
      .required('Subject 3 marks is required')
      .min(0, 'Subject 3 marks must be greater than or equal to 0')
      .max(100, 'Subject 3 marks must be less than or equal to 100'),
  })

  const { register, formState: { errors }, reset, handleSubmit } = useForm({

    resolver: yupResolver(shcema)
  });




  const [formdata, setFormData] = useState({
    sid: "",
    studentName: "",
    course: "",
    fee: "",
    sub1: "",
    sub2: "",
    sub3: ""
  })

  const { sid, studentName, course, fee, sub1, sub2, sub3 } = formdata;

  const navigate = useNavigate();
  const param = useParams();
  const [id, setId] = useState(param.var1);

  const Edit = (id) => {
    axios.get(`http://localhost:9876/getone/${id}`).then(
      (posres) => {
        const { data } = posres
        setFormData(data)
      },
      (err) => {
        console.log(err);
      }
    )
  }

  useEffect(() => { Edit(id); }, [])

  const onsubmit = (data) => {

    setFormData(data);

    axios.put(`http://localhost:9876/update/${param.var1}`, formdata).then(
      (posres) => {
        console.log(posres);
        navigate(`/`);
      }, (err) => {
        console.log(err);
      }
    )

  }



  return (<>

    <div className='container-xxl py-4 px-3 text-center text-bg-primary  p-3'>
      <h2>STUDENT CRUD APPLICATION</h2>
      <button onClick={() => navigate(`/create`)} className='btn btn-warning'>CREATE STUDENT DETAILS</button>

    </div>
    <div className='container px-1 text-center text-bg-secondary border-radius-5 text-dark  p-2 rounded'>
      <h2>UPDATE STUDENT DETAILS</h2>
    </div>
    <div className='container'>
      <fieldset className='border border-danger p-3 m-4 rounded bg-dark' >

        <form onSubmit={handleSubmit(onsubmit)} className='text-white'>
          <div className='row'>
            <div className='col-6'>

              <div className='form-group  mb-3'>
                <label className='form-lable'>STUDENT ID</label>
                <input value={sid} name='sid' type='number'  {...register("id")} onChange={(e) => { setFormData({ ...formdata, sid: e.target.value }) }} className='form-control' placeholder='Enter student id ' />
                <span className="text-danger">{errors.sid?.message}</span>
              </div>

              <div className='form-group mb-3'>
                <label className='form-lable'>STUDENT NAME</label>
                <input value={studentName} name='studentName' type='text'   {...register("studentName")} onChange={(e) => { setFormData({ ...formdata, studentName: e.target.value }) }} className='form-control' placeholder='Enter student name ' />
                <span className="text-danger">{errors.studentName?.message}</span>
              </div>

              <div className='form-group mb-3'>
                <label className='form-lable'>COURSE</label>
                <input value={course} name='course' type='text'  {...register("course")} onChange={(e) => { setFormData({ ...formdata, course: e.target.value }) }} className='form-control' placeholder='Enter course ' />
                <span className="text-danger">{errors.course?.message}</span>
              </div>

              <div className='form-group mb-3'>
                <label className='form-lable'>FEE</label>
                <input value={fee} name='fee' type='number'  {...register("fee")} onChange={(e) => { setFormData({ ...formdata, fee: e.currentTarget.value }) }} className='form-control' placeholder='Enter fee ' />
                <span className="text-danger">{errors.fee?.message}</span>
              </div>
            </div>

            <div className='col-6'>
              <div className='form-group mb-3'>
                <label className='form-lable'>SUB1</label>
                <input value={sub1} name='sub1' type='number' {...register("sub1")} onChange={(e) => { setFormData({ ...formdata, sub1: e.target.value }) }} className='form-control' placeholder='Enter sub1 marks ' />
                <span className="text-danger">{errors.sub1?.message}</span>
              </div>

              <div className='form-group mb-3'>
                <label className='form-lable'>SUB2</label>
                <input value={sub2} name='sub2' type='number' {...register("sub2")} onChange={(e) => { setFormData({ ...formdata, sub2: e.target.value }) }} className='form-control' placeholder='Enter sub2 marks ' />
                <span className="text-danger">{errors.sub2?.message}</span>
              </div>

              <div className='form-group mb-3'>
                <label className='form-lable'>SUB3</label>
                <input value={sub3} name='sub3' type='number' {...register("sub3")} onChange={(e) => { setFormData({ ...formdata, sub3: e.target.value }) }} className='form-control' placeholder='Enter sub3 marks ' />
                <span className="text-danger">{errors.sub3?.message}</span>
              </div>

              <div className="col-6 ">
                <button type='submit' className="btn btn-info mx-3 mt-4 ">UPDATE</button>
                <button type='reset' onClick={() => { reset() }} className="btn btn-danger mx-3 mt-4 ">RESET</button>
              </div>

            </div>
          </div>
        </form>

      </fieldset>
    </div>


  </>)
}

export default Update