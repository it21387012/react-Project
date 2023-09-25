
import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditEvent(){

    const navigate = useNavigate();
    const {id} = useParams();
    const [Eventedit, setPayments] = useState({
        eventName:'',
        email:'',
        password:'',
        idNumber:'',
        phoneNumber:'',
        grade:'',
        school:''
     
    });

    //Fetch data
    useEffect(()=>{
        function getPayments (){
            axios.get("http://localhost:8070/event/get/"+id)
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
          ...Eventedit,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(Event); // or save the data to your backend
        axios
        .put('http://localhost:8070/event/update/'+id, Eventedit)
        .then((response) => {
            // console.log(response.data);
            alert("Event Updated");
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
    <h1>EDIT Event</h1>
    </div>
    <div className="title">
    <form onSubmit={handleSubmit} >
        <div className="row">
            <div className="col-md-4">
                <label for>Event Name :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="eventName" value={Eventedit.eventName}
                ></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Email:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="email" value={Eventedit.email}
                ></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for> Password:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="password" value={Eventedit.password}
                ></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>IdNumber:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="idNumber" value={Eventedit.idNumber}
                onChange={handleChange}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <label for>Mobile Number:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="phoneNumber" value={Eventedit.phoneNumber}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Grade :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="grade" value={Eventedit.grade}
                onChange={handleChange}></input>
            </div> 
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>School:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="school" value={Eventedit.school}
                ></input>
            </div> 
        </div>

        <button type="submit" className="btn btn-primary">Save</button>
        <Link to={''}><button className="btn btn-danger">Cancel</button></Link>
    </form>
    </div>
    </div>
    </div>
     )
    
    }