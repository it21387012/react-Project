//conect mongo db
const mongoose = require ("mongoose");
//const { required } = require('nodemon/lib/config');
 
const Schema = mongoose.Schema;
//creat Student schema
const StudentSchema = new Schema({

    StudentName: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true,
        unique:true

    },
    password:{
        type :String,
        required : true
    },

    Age: {
        type : Number,
        required : true
    },
    phonenumber: {
        type :Number,
        required : true
    },
    gradeofstudy:{

        type : Number,
        required : true
    },
    homeaddress:{

        type : String,
        required : true
    },
    
})
//creat model to Student
const Student = mongoose.model("Student",StudentSchema);
//eport module
module.exports = Student;