//conect mongo db
const mongoose = require ("mongoose");
//const { required } = require('nodemon/lib/config');
 
const Schema = mongoose.Schema;
//creat Teacher schema
const TeacherSchema = new Schema({

    TeacherName: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true

    },
    gender:{
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
    numberofclassestaugh:{

        type : Number,
        required : true
    },
    subjecttaugh:{

        type : String,
        required : true
    },
    
})
//creat model to Teacher
const Teacher = mongoose.model("Teacher",TeacherSchema);
//eport module
module.exports = Teacher;