import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../components/css/dashb.css';
export default function AdminDashboard(){
    return(
        <div>
            <div className="adm-containrt">
                <div className="adm-left">
                    <div className="Ad-head-line">
                        <h1>ADMIN DASHBOARD</h1>
                        <Link to={'/AdminLogin'}>
                            <div className="btn-Signin">
                                <h4>Login</h4>
                            </div>
                        </Link>
                        <Link to={'/Register'}>
                            <div className="btn-Signup">
                                <h4>Register</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="Ad-menu-container">
                        <div className="Ad-menu-item">

                        <div className="ad-box1">
                                <Link to={'/DashboardView'}>
                                        <div className="head">
                                            <h3>Chart View</h3>
                                        </div>
                                </Link>
                            </div>
                            <div className="ad-box1">
                                <Link to={'/ManageAdmin'}>
                                    <div className="head">
                                        <h3>Manage Admins</h3>
                               
                                    </div>
                                </Link>
                            </div>

                            <div className="ad-box1">
                                <Link to={'/AdminNotify'}>
                                        <div className="head">
                                            <h3>Notice</h3>
                                        </div>
                                </Link>
                            </div>
                            <div className="ad-box1">
                                <Link to={'/ReportDownload'}>
                                    <div className="head">
                                        <h3>Report Download</h3>
            
                                    </div>
                                </Link>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>



    )

}


