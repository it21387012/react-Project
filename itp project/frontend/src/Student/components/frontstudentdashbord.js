import React from 'react'
import Noticebord from './Noticebord'


export default function frontstudentdashbord() {
  return (
    <div>
      <div className="menu">
        <div className="">
            <h1> <center>STUDENT DASHBOARD</center> </h1>
            </div>
        </div>
      <Noticebord/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <section class="services section-padding" id="services">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-header text-center pb-5">
                
                <h2>Our Services</h2>
                <p>Education institute in Sri Lanka is a place where students get extra knowledge or co help to their school syllabus.</p>
              </div>
            </div>
          </div>
          <center>
          <div class="row">
            <div class="col-12 col-md-12 col-lg-4">
              <div class="card text-white text-center bg-dark pb-2">
                <div class="card-body">
                  <i class="bi bi-laptop"></i>
                  <h3 class="card-title">Communication and Collaboration</h3>
                  <p class="lead">The system provides communication tools to facilitate interaction between students, teachers, and parents. It may include features such as messaging, announcements, discussion forums, and online collaboration spaces..</p>
                  <a href='/spirits'><button class="btn bg-warning text-dark">Shop Now</button></a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4">
              <div class="card text-white text-center bg-dark pb-2">
                <div class="card-body">
                  <i class="bi bi-journal"></i>
                  <h3 class="card-title">Attendance Tracking</h3>
                  <p class="lead">The system enables the recording and tracking of student attendance, both for individual classes and overall attendance history. It may include features like automated attendance marking, absence notifications, and generating reports</p>
                  <a href='/spirits'><button class="btn bg-warning text-dark">Shop Now</button></a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4">
              <div class="card text-white text-center bg-dark pb-2">
                <div class="card-body">
                  <i class="bi bi-intersect"></i>
                  <h3 class="card-title">Student Profiles</h3>
                  <p class="lead"> The system stores and manages comprehensive profiles for each student, including personal details, contact information, emergency contacts, and academic records. Overall, a student management system simplifies administrative tasks</p>
                  <a href='/spirits'><button class="btn bg-warning text-dark">Shop Now</button></a>
                </div>
              </div>
            </div>
            
          </div>
          </center>
        </div>
        
      </section>

    </div>
  )
}

