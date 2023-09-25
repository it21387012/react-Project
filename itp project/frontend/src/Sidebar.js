import React from 'react';

function Sidebar(){
    return(
        <div>
            <section id="sidebar">
                <div className='container'>
                <div className='col-md-4'></div>
                <div className='col-md-6'>
                    <br/><img className='brandLogo' src={require('./Slogo.png')} /><br/><br/></div></div>
                    <span class="brand" style={{ textshadow: '2px',textshadow: '2px',textshadow: '2px',textshadow: '#0000FF' }}>Education Institute Management System</span>

                    <ul className="side-menu top">
                        <li >
                            <a href="/Dashboard">
                                <i className='bx bxs-dashboard' ></i>
                                <span className="text"> Student Dashboard</span>
                            </a>
                        
                        </li>
                        <li >
                            <a href="/admindashboard">
                                <i className='bx bxs-dashboard' ></i>
                                <span className="text"> Admin Dashboard</span>
                            </a>
                        </li>
                        <li >
                            <a href="/ExamDashboard">
                                <i className='bx bxs-dashboard' ></i>
                                <span className="text">Exam Dashboard</span>
                            </a>
                        
                        </li>
                        <li >
                            <a href="/TDashboard">
                                <i className='bx bxs-dashboard' ></i>
                                <span className="text">Teacher Dashboard</span>
                            </a>
                        
                        </li>
                        <li >
                            <a href="/PDashboard">
                                <i className='bx bxs-dashboard' ></i>
                                <span className="text">Payment Dashboard</span>
                            </a>
                        
                        </li>
                        <li >
                            <a href="/EmployeeDashboard">
                                <i className='bx bxs-dashboard' ></i>
                                <span className="text">Employee Dashboard</span>
                            </a>
                        
                        </li>
                        <li >
                            <a href="/aDashboard">
                                <i className='bx bxs-dashboard' ></i>
                                <span className="text">Attends Dashboard</span>
                            </a>
                        
                        </li>
                        <li >
                            <a href="/EventDash">
                                <i className='bx bxs-dashboard' ></i>
                                <span className="text">Event Dashboard</span>
                            </a>
                        
                        </li>
                    
                        <li>
                            <a href="/" className="logout">
                                <i className='bx bx-exit'></i>
                                <span className="text">Logout</span>
                            </a>
                        </li>
                    </ul>
                </section>

        </div>
    )
}
export default Sidebar