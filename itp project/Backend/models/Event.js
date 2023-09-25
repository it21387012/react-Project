const mongoose = require ("mongoose");
//const { required } = require('nodemon/lib/config');
 
const Schema = mongoose.Schema;
//creat Admin schema
const EventSchema = new Schema({

    eventName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true

    },
    password:{
        type :String,
        required : true
    },

    idNumber: {
        type : String,
        required : true
    },
    phoneNumber : {
        type :String,
        required : true
    },
    grade :{
        type : String,
        required : true
    },
    school :{
        type : String,
        required : true
    },
    
})
//creat model to Admin
const Event = mongoose.model("Event",EventSchema);
//eport module
module.exports = Event;