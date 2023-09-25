//conect mongo db
const mongoose = require("mongoose");
//const { required } = require('nodemon/lib/config');

// const Schema = mongoose.Schema;
//creat Payment schema
const PaymentSchema = new mongoose.Schema({

    PStudentName: {
        type: String,
        required: true
    },
    PClassname: {
        type: String,
        required: true

    },
    PAddress: {
        type: String,
        required: true
    },

    PAmount: {
        type: Number,
        required: true
    },
    PStudentID: {
        type: Number,
        required: true
    },
    Pgradeofstudy: {

        type: Number,
        required: true
    },
    PGrade: {

        type: String,
        required: true
    },

})

//creat model to Payment
const Payment = mongoose.model("Payment", PaymentSchema);

//eport module
module.exports = Payment