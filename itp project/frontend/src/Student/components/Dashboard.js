import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Dashboard(){
    return(

<body>
<section id="content">
    <main>

    <div className="menu">
        <div className="left">
            <h1>STUDENT DASHBOARD</h1>
            </div>
        </div>

        <div className="table-data">
            
                <div className="tbutton">
                <Link to={'/ManageItems'}>
                <div className="head">
                    <h3>MANAGE Student</h3>
                    <i class='bx bxs-customize'></i>
                </div>
                </Link>
                </div> 
            <div className="tbutton">
            <Link to={'/AddStudent'}>
                <div className="head">
                    <h3>ADD Student</h3>
                    <i class='bx bxs-alarm-add'></i>
                </div>
            </Link>
                
            </div>
            <div className="tbutton">
            <Link to={'/Report'}>
                <div className="head">
                    <h3>VIEW REPORT</h3>
                    <i class='bx bxs-report'></i>
                </div>
            </Link>
            </div>
            <div className="tbutton">
            <Link to={'/ManageItems'}>
                <div className="head">
                    <h3>MANAGE All INFORMATION</h3>
                    <i class='bx bxs-customize'></i>
                </div>
            </Link>
</div>
<div className="tbutton">
            <Link to={'/notice'}>
                <div className="head">
                    <h3>NoticeBord</h3>
                    <i class='bx bxs-customize'></i>
                </div>
            </Link>
</div>
<div className="tbutton">
            <Link to={'/chart'}>
                <div className="head">
                    <h3>Chart</h3>
                    <i class='bx bxs-customize'></i>
                </div>
            </Link>
</div>

        </div>
    </main>
</section>
</body>




    )

}


