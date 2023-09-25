//conect mongo db
const mongoose = require ("mongoose");
//const { required } = require('nodemon/lib/config');
 
const Schema = mongoose.Schema;
//creat Exam schema
const ExamSchema = new Schema({

    StudentName: {
        type : String,
        required : true
    },
    StudentID: {
        type : String,
        required : true

    },
    Subject:{
        type :String,
        required : true
    },

    Place: {
        type : Number,
        required : true
    },
    Avarage: {
        type :Number,
        required : true
    },
    gradeofstudy:{

        type : Number,
        required : true
    },
    Grade:{

        type : String,
        required : true
    },
    
})
//creat model to Exam
const Exam = mongoose.model("Exam",ExamSchema);
//eport module
module.exports = Exam;