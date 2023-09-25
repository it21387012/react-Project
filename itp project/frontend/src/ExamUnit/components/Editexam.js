
import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditExam(){

    const navigate = useNavigate();
    const {id} = useParams();
    const [Examedit, setPayments] = useState({
        Studentname:'',
        StudentID:'',
        Subject:'',
        Place:'',
        Avarage:'',
        gradeofstudy:'',
        Grade:''
     
    });

    //Fetch data
    useEffect(()=>{
        function getPayments (){
            axios.get("http://localhost:8070/exam/get/"+id)
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
          ...Examedit,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(Exam); // or save the data to your backend
        axios
        .put('http://localhost:8070/exam/update/'+id, Examedit)
        .then((response) => {
            // console.log(response.data);
            alert("Exam Updated");
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
    <h1>EDIT Exam</h1>
    </div>
    <div className="title">
    <form onSubmit={handleSubmit} >
        <div className="row">
            <div className="col-md-4">
                <label for>Student Name :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="StudentName" value={Examedit.Studentname}
                ></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Student ID:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="StudentID" value={Examedit.StudentID}
                ></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for> Subject:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="Subject" value={Examedit.Subject}
                ></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Place:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="Place" value={Examedit.Place}
                onChange={handleChange}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <label for>Avarage:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="Avarage" value={Examedit.Avarage}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Grade Of Study:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="gradeofstudy" value={Examedit.gradeofstudy}
                onChange={handleChange}></input>
            </div> 
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Grade:</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="Grade" value={Examedit.Grade}
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