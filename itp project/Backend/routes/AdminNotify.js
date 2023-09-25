const router = require("express").Router();
const Notify = require("../models/AdminNotify");


//add item
router.route("/add").post((req,res)=>{
    const notId =req.body.notId;
    const notDescript = req.body.notDescript;
        const newNotify = new Notify({
        notId,
        notDescript
            
     })
     newNotify.save().then(() => {
            res.json("Admin added")
    }).catch ((err)=>{
        console.log(err);
    })    
});
//read
router.route ("/").get((req,res) => {

    Notify.find().then((Notify) => {
        res.json(Notify)

    }).catch((err) => {
        console.log(err)
    })
})

//delete
router.route("/delete/:id").delete(async (req,res) => {
    let userId  = req.params.id;
    await Notify.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

module.exports = router;