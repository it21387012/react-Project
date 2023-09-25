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
                <Link to={'/ManageEvent'}>
                <div className="head">
                    <h3>MANAGE Event</h3>
                    <i class='bx bxs-customize'></i>
                </div>
                </Link>
                </div> 
            <div className="tbutton">
            <Link to={'/AddEvent'}>
                <div className="head">
                    <h3>ADD Event</h3>
                    <i class='bx bxs-alarm-add'></i>
                </div>
            </Link>
                
            </div>
            <div className="tbutton">
            <Link to={'/Eventrreport'}>
                <div className="head">
                    <h3>VIEW REPORT</h3>
                    <i class='bx bxs-report'></i>
                </div>
            </Link>
            </div>
            <div className="tbutton">
            <Link to={'/ManageEvent'}>
                <div className="head">
                    <h3>MANAGE Add event</h3>
                    <i class='bx bxs-cart-alt'></i>
                </div>
            </Link>
            </div>
        </div>
    </main>
</section>
</body>




    )

}


