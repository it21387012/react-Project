
import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export default function EditTeacher(){

    const navigate = useNavigate();
    const {id} = useParams();
    const [Teacheredit, setPayments] = useState({
        TeacherName:'',
        email:'',
        gender:'',
        Age:'',
        phonenumber:'',
        numberofclassestaugh:'',
        subjecttaugh:''
     
    });

    //Fetch data
    useEffect(()=>{
        function getPayments (){
            axios.get("http://localhost:8070/teacher/get/"+id)
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
          ...Teacheredit,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(Teacher); // or save the data to your backend
        axios
        .put('http://localhost:8070/teacher/update/'+id, Teacheredit)
        .then((response) => {
            // console.log(response.data);
            Swal.fire(
                'Update Teacher Record!',
                'You have successfully updated a Teacher Details',
                'success'
              )
            navigate('/ManageTeacher');
        })
        .catch((error) => {
            console.log(error);
        });
      };


    return(
        <div><br></br>
    <div className="container">
        <div className="TOPIC">
    <h1>EDIT Teacher</h1>
    </div>
    <div className="title">
    <form onSubmit={handleSubmit} >
        <div className="row">
            <div className="col-md-4">
                <label for>Teacher Name :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="TeacherName" value={Teacheredit.TeacherName}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Email:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="email" value={Teacheredit.email}
                ></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for> Gender:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="password" value={Teacheredit.gender}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Age:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="Age" value={Teacheredit.Age}
                onChange={handleChange}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <label for>Phone Number:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="phonenumber" value={Teacheredit.phonenumber}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Number of classes taugh:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="gradeofstudy" value={Teacheredit.numberofclassestaugh}
                onChange={handleChange}></input>
            </div> 
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Subject taugh:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="homeaddress" value={Teacheredit.subjecttaugh}
                onChange={handleChange}></input>
            </div> 
        </div>

        <button type="submit" className="btn btn-primary">Save</button>
        <Link to={'/ManageTeacher'}><button className="btn btn-danger">Cancel</button></Link>
    </form>
    </div>
    </div>
    </div>
     )
    
    }