//package 
const express = require("express");
const mongoose = require("mongoose");
const bodyPaser = require("body-parser");
const cors = require ("cors"); 
const dotenv = require ("dotenv");
const app = express();
require("dotenv").config();
 
//port difine
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyPaser.json());
//database conection
const URL = process.env.MONGODB_URL;
            
//configartion of mogodb
mongoose.connect(URL,{
  useCreateIndex: true,
  useNewUrlParser: true,
  //useUnifiedTopologyL: true,
  useFindAndModify: false
});
const connection = mongoose.connection;
connection.once("open",()=>{
 console.log("mongodb connection success");   
})

const StudentRouter = require("./routes/Student.js");
app.use("/Student",StudentRouter);

const AdminRouter = require("./routes/AdminRegister.js");
app.use("/Admin",AdminRouter);

const AdminNotifyRouter = require("./routes/AdminNotify.js");
app.use("/Notify",AdminNotifyRouter);

const ExamRouter = require("./routes/ExamUnit.js");
app.use("/Exam",ExamRouter);

const TeacherRouter = require("./routes/Teacher.js");
app.use("/Teacher",TeacherRouter);


const ApiRouter = require("./routes/TaskRoute.js");
app.use("/api",ApiRouter);
  
const PaymentRouter = require("./routes/Payment.js");
app.use("/Payment", PaymentRouter);


const EmployeeRouter = require("./routes/Employee.js");
app.use("/Employee",EmployeeRouter);


const EventRouter = require("./routes/Event.js");
app.use("/Event",EventRouter);


 
app.listen(PORT,()=>{
  console.log(`sever is up and running on port number: +${PORT}`)  
})