import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Dashboard(){
    return(

<body>
<section id="content">
    <main>

    <div className="menu">
        <div className="left">
            <h1>TEACHER DASHBOARD</h1>
            </div>
        </div>

        <div className="table-data">
            
                <div className="tbutton">
                <Link to={'/ManageTeacher'}>
                <div className="head">
                    <h3>MANAGE TEACHER DETAILS</h3>
                    <i class=''></i>
                </div>
                </Link>
                </div> 
            <div className="tbutton">
            <Link to={'/AddTeacher'}>
                <div className="head">
                    <h3>ADD TEACHER</h3>
                    <i class=''></i>
                </div>
            </Link>
                
            </div>
            <div className="tbutton">
            <Link to={'/Teacherreport'}>
                <div className="head">
                    <h3>VIEW TEACHER REPORT</h3>
                    <i class=''></i>
                </div>
            </Link>
            </div>
            
        </div>
    </main>
</section>
</body>




    )

}


