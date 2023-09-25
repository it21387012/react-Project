
import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export default function EditEmployee(){

    const navigate = useNavigate();
    const {id} = useParams();
    const [Employeeedit, setPayments] = useState({
        EmployeeName:'',
        email:'',
        password:'',
        age:'',
        phonenumber:'',
        employeeid:'',
        homeaddress:''
     
    });

    //Fetch data
    useEffect(()=>{
        function getPayments (){
            axios.get("http://localhost:8070/employee/get/"+id)
            .then((res)=>{
                 setPayments(res.data.data);
                console.log(res.data.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getPayments();
    },[])

    const handleChange = (e) => {
        setPayments({
          ...Employeeedit,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(Employee); // or save the data to your backend
        axios
        .put('http://localhost:8070/employee/update/'+id, Employeeedit)
        .then((response) => {
            // console.log(response.data);
            Swal.fire(
                'Update Employee Record!',
                'You have successfully updated a Employee Details',
                'success'
              )
            navigate('/ManageItems');
        })
        .catch((error) => {
            console.log(error);
        });
      };


    return(
        <div><br></br>
    <div className="container">
        <div className="TOPIC">
    <h1>EDIT Employee</h1>
    </div>
    <div className="title">
    <form onSubmit={handleSubmit} >
        <div className="row">
            <div className="col-md-4">
                <label for>Employee Name :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="EmployeeName" value={Employeeedit.EmployeeName}
                ></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Email:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="email" value={Employeeedit.email}
                ></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for> Password:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="password" value={Employeeedit.password}
                ></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Age:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="Age" value={Employeeedit.age}
                onChange={handleChange}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <label for>Phone Number:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="phonenumber" value={Employeeedit.phonenumber}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Employee ID:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="employeeid" value={Employeeedit.employeeid}
                onChange={handleChange}></input>
            </div> 
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Home Address:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="homeaddress" value={Employeeedit.homeaddress}
                ></input>
            </div> 
        </div>

        <button type="submit" className="btn btn-primary">Save</button>
        <Link to={'/ManageItems'}><button className="btn btn-danger">Cancel</button></Link>
    </form>
    </div>
    </div>
    </div>
     )
    
    }