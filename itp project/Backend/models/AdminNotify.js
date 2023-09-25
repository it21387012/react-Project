const mongoose = require ("mongoose");

const Schema = mongoose.Schema;
const NotifySchema = new Schema({
    notId:{
        type : String,
        required : true
    },

    notDescript : {
        type : String,
        required : true
    },
    
})
const AdminNotify = mongoose.model("AdminNotify",NotifySchema);
module.exports = AdminNotify;