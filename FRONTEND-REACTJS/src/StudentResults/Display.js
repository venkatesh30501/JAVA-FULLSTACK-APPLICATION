
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate, NavLink, Navigate } from "react-router-dom";
const Display = () => {
  const [arr, setArr] = useState([]);

  const navigate = useNavigate();

  function name(params) {

    navigate(`/update/${params}`)

  }



  const getAll = () => {

    axios.get(`http://localhost:9876/viewall`).then(
      (posres) => {
        const { data } = posres;
        setArr(data);
      },
      (err) => {
        console.log(err);
      })

  }

  useEffect(() => {
    axios.get(`http://localhost:9876/viewall`).then(
      (posres) => {
        const { data } = posres;
        setArr(data);
      },
      (err) => {
        console.log(err);
      })
  }, [])


  const Delete = (deleteId) => {
    axios.delete(`http://localhost:9876/delete/${deleteId}`).then(
      (posres) => {
        console.log("record deleted successfully");
        getAll();
      },
      (err) => {
        console.log(err);
      }
    )
  }




  return (<>

    <div className='container-xxl py-4 px-3 text-center text-bg-info text-white  p-3'>
      <h2>STUDENT CRUD APPLICATION</h2>
      <button onClick={() => navigate(`/create`)} className='btn btn-warning'>CREATE STUDENT DETAILS</button>
    </div>
    <div className='container px-1 text-center text-bg-danger border-radius-5 text-waring  p-2 rounded'>
      <h2>STUDENT DETAILS</h2>
    </div>
    <div className='container-xxl text-center'>
      <table className='table table-bordered table-dark table-hover text-center'>
        <thead>
          <tr>
            <th>SID</th>
            <th>STUDENT NAME</th>
            <th>COURSE</th>
            <th>FEE</th>
            <th>SUB1</th>
            <th>SUB2</th>
            <th>SUB3</th>
            <th>TOTAL</th>
            <th>PERCENTAGE</th>
            <th>GRADE</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {
            arr.map((element, index) => {

              return (<tr key={index}>
                <td>{element.sid}</td>
                <td>{element.studentName}</td>
                <td>{element.course}</td>
                <td>{element.fee}</td>
                <td>{element.sub1}</td>
                <td>{element.sub2}</td>
                <td>{element.sub3}</td>
                <td>{element.total}</td>
                <td>{element.percentage}%</td>
                <td>{element.grade}</td>
                <td><button onClick={() => name(element.sid)} className='btn btn-info'>Edit</button></td>

                <td><button onClick={() => { if (window.confirm('Are You Sure To Delete Data ??')) { Delete(element.sid) } }} className='btn btn-danger'>Delete</button></td>
              </tr>)
            })
          }
        </tbody>
      </table>

    </div>
  </>)
}

export default Display