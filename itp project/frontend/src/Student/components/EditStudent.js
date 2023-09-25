
import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export default function EditStudent(){

    const navigate = useNavigate();
    const {id} = useParams();
    const [Studentedit, setPayments] = useState({
        StudentName:'',
        email:'',
        password:'',
        Age:'',
        phonenumber:'',
        gradeofstudy:'',
        homeaddress:''
     
    });

    //Fetch data
    useEffect(()=>{
        function getPayments (){
            axios.get("http://localhost:8070/student/get/"+id)
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
          ...Studentedit,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(Student); // or save the data to your backend
        axios
        .put('http://localhost:8070/student/update/'+id, Studentedit)
        .then((response) => {
            // console.log(response.data);
            
            Swal.fire(
                'Update Student Record!',
                'You have successfully updated a Student Details',
                'success'
              )
            navigate('/Emanegeitem');
        })
      
        .catch((error) => {
            console.log(error);
        });
      };


    return(
        <div><br></br>
    <div className="container">
        <div className="TOPIC">
    <h1>EDIT Student</h1>
    </div>
    <div className="title">
    <form onSubmit={handleSubmit} >
        <div className="row">
            <div className="col-md-4">
                <label for>Student Name :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="StudentName" value={Studentedit.StudentName}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Email:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="email" value={Studentedit.email}
                ></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for> Password:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="password" value={Studentedit.password}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Age:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="Age" value={Studentedit.Age}
                onChange={handleChange}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <label for>Phone Number:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="phonenumber" value={Studentedit.phonenumber}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Grade Of Study:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="gradeofstudy" value={Studentedit.gradeofstudy}
                onChange={handleChange}></input>
            </div> 
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Grade Of Study:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="homeaddress" value={Studentedit.homeaddress}
                onChange={handleChange}></input>
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