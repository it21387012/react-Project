import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Dashboard(){
    return(

<body>
<section id="content">
    <main>

    <div className="menu">
        <div className="left">
            <h1>DASHBOARD</h1>
            </div>
        </div>

        <div className="table-data">
            
                <div className="tbutton">
                <Link to={'/ManageExam'}>
                <div className="head">
                    <h3>MANAGE STUDENT PROFILE</h3>
                    <i class='bx bxs-customize'></i>
                </div>
                </Link>
                </div> 
            <div className="tbutton">
            <Link to={'/AddExam'}>
                <div className="head">
                    <h3>ADD STUDENT DETAILS</h3>
                    <i class='bx bxs-alarm-add'></i>
                </div>
            </Link>
                
            </div>
            <div className="tbutton">
            <Link to={'/ExamReportgenerate'}>
                <div className="head">
                    <h3>VIEW STUDENT PROFILE</h3>
                    <i class='bx bxs-report'></i>
                </div>
            </Link>
            </div>
        </div>
    </main>
</section>
</body>




    )

}


