//conect mongo db
const mongoose = require ("mongoose");
//const { required } = require('nodemon/lib/config');
 
const Schema = mongoose.Schema;
//creat Admin schema
const AdminSchema = new Schema({

    AdminName: {
        type : String,
        required : true
    },
    lname: {
        type : String,
        required : true

    },
    nicNum:{
        type :String,
        required : true
    },

    age: {
        type : Number,
        required : true
    },
    phoneNumber: {
        type :Number,
        required : true
    },
    experience:{

        type : Number,
        required : true
    },
    password:{

        type : String,
        required : true
    },
    
})
//creat model to Admin
const Admin = mongoose.model("Admin",AdminSchema);
//eport module
module.exports = Admin;