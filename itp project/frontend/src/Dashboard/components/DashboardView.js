import React, { useState, useEffect } from "react";
import axios from "axios";
import '../components/css/dashboardView.css'

export default function DashboardView() {
    //student
    const [users, setUsers] = useState([]);
    const [studentCount, setStudentCount] = useState(0);

    //employee
    const [employee, setEmployee] = useState([]);
    const [employeeCount, setEmployeeCount] = useState(0);
    
    //teacher
    const [teacher, setTeacher] = useState([]);
    const [teacherCount, setTeacherCount] = useState(0);
 




useEffect(() => {
    // Fetch student data
    axios
      .get("http://localhost:8070/student/")
      .then((res) => {
        setUsers(res.data);
        setStudentCount(res.data.length);
      })
      .catch((err) => {
        alert(err.message);
      });

    // Fetch employee data
    axios
      .get("http://localhost:8070/employee/")
      .then((res) => {
        setEmployee(res.data);
        setEmployeeCount(res.data.length);
      })
      .catch((err) => {
        alert(err.message);
      });
      axios
      .get("http://localhost:8070/teacher/")
      .then((res) => {
        setTeacher(res.data);
        setTeacherCount(res.data.length);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);



  return (
    <>  
        {/* <Header/> */}
        <div className='emp'>
            <div className='chart-hed'>
                <h1 className='chart-Ad-hd'>Chart View</h1>
            </div>
            <div className="count-view-br">
                <div className='st'>
                    <h3 className="h3-view">STUDENTS</h3>
                    {/*show*/}
                    <h1 className='student-count'>
                        {studentCount}
                    </h1>
                </div>
                <div className='st'>
                    <h3 className="h3-view">EMPLOYEES</h3>
                    {/*show*/}
                    <h1 className='employee-count'>
                        {employeeCount}
                    </h1>
                </div>
                <div className='st'>
                    <h3 className="h3-view">TEACHERS</h3>
                    {/*show*/}
                    <h1 className='teacher-count'>
                        {teacherCount}
                    </h1>
                </div>
                <div className='st'>
                    <h3 className="h3-view">EVENTS</h3>
                    {/*show*/}
                    <h1 className='event-count'>2</h1>
                </div>
            </div>
        
               {/* chart-view */}

            <div className='chart-view-bg'>

                <dev className="chart-view-attend-t">
                    
                    <table class="graph">
                        <caption>Today Attendance Chart</caption>
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Percent</th>
                            </tr>
                        </thead>
                            
                        <tbody>
                                
                            <tr style={{height:'8%'}}>
                                <th scope="row">Student</th>
                                <td><span>2%</span></td>
                            </tr>
                            <tr style={{height:'35%'}}>
                                <th scope="row">Teacher</th>
                                <td><span>23%</span></td>
                            </tr>
                            <tr style={{height:'65%'}}>
                                <th scope="row">Employee</th>
                                <td><span>23%</span></td>
                            </tr>
                        </tbody>
                    </table> 
                </dev>
                
                {/* <dev className="chart-view-income">
                    <caption>Today Attendance Chart</caption>
                </dev> */}
            </div>

        </div>
    </>
  )
}
