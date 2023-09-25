
import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

export default function EditeProfile(){

    const navigate = useNavigate();
    const {id} = useParams();
    const [Adminedit, setPayments] = useState({
        AdminName:'',
        lname:'',
        nicNum:'',
        age:'',
        phoneNumber:'',
        experience:'',
        password:''
     
    });

    //Fetch data
    useEffect(()=>{
        function getPayments (){
            axios.get("http://localhost:8070/admin/get/"+id)
            .then((res)=>{
                 setPayments(res.data.data);
                console.log(res.data.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getPayments();
    },[id])

    const handleChange = (e) => {
        setPayments({
          ...Adminedit,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(Admin); // or save the data to your backend
        axios.put('http://localhost:8070/admin/update/'+id, Adminedit)
        .then((response) => {
            // console.log(response.data);
            Swal.fire(
                'User Update!',
                'You have successfully updated a user',
                'success'
              )
            navigate('/ManageAdmin');
        })
        .catch((error) => {
            console.log(error);
        });
      };


    return(
        <div><br></br>
    <div className="container">
        <div className="TOPIC">
    <h1>EDIT Admin</h1>
    </div>
    <div className="title">
    <form onSubmit={handleSubmit} >
        <div className="row">
            <div className="col-md-4">
                <label for>Admin Name :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="AdminName" value={Adminedit.AdminName}
                ></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Last name:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="lname" value={Adminedit.lname}
                ></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for> nic name:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="nicNum" value={Adminedit.nicNum}
                ></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Age:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="age" value={Adminedit.age}
                onChange={handleChange}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <label for>Phone Number:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="phoneNumber" value={Adminedit.phoneNumber}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Year Of experience:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="experience" value={Adminedit.experience}
                onChange={handleChange}></input>
            </div> 
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Passwoard:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="password" value={Adminedit.password}
                ></input>
            </div> 
        </div>

        <button type="submit" className="btn btn-primary">Save</button>
        <Link to={'/ManageAdmin'}><button className="btn btn-danger">Cancel</button></Link>
    </form>
    </div>
    </div>
    </div>
     )
    
    }