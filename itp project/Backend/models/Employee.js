//conect mongo db
const mongoose = require ("mongoose");
//const { required } = require('nodemon/lib/config');
 
const Schema = mongoose.Schema;
//creat Employee schema
const EmployeeSchema = new Schema({

    EmployeeName: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true

    },
    password:{
        type :String,
        //required : false
    },

    age: {
        type : Number,
        //required : false
    },
    phonenumber: {
        type :Date,
        required : true
    },
    employeeid:{

        type : Number,
        required : true
    },
    homeaddress:{

        type : String,
        required : true
    },
    
})
//creat model to Employee
const Employee = mongoose.model("Employee",EmployeeSchema);
//eport module
module.exports = Employee;