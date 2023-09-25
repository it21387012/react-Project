const router = require("express").Router();
const Admin = require("../models/AdminRegister");


//add item
router.route("/add").post((req,res)=>{
  const AdminName =req.body.AdminName;
  const lname = req.body.lname;
  const nicNum = req.body.nicNum;
  const age = Number( req.body.age);
  const phoneNumber=Number(req.body.phoneNumber);
  const experience =Number(req.body.experience);
  const password = req.body.password;

    const newAdmin = new Admin({
      AdminName,
      lname,
      nicNum,
      age,
      phoneNumber,
      experience,
      password
        
 })
     newAdmin.save().then(() => {
        res.json("Admin added")
}).catch ((err)=>{
    console.log(err);
})

})
 
//read
router.route ("/").get((req,res) => {

    Admin.find().then((Admin) => {   
        res.json(Admin) 

    }).catch((err) => {
        console.log(err)
    })

})
//update
router.route ("/update/:id").put(async (req,res) => {
   let userId  = req.params.id;
   const {AdminName,
    lname,
    nicNum,
    age,
    phoneNumber,
    experience,
    password} = req.body;
//user id must change
  const UpdateAdmin = {

    AdminName,
    lname,
    nicNum,
    age,
    phoneNumber,
    experience,
    password


  }
  const update = await Admin.findByIdAndUpdate(userId,UpdateAdmin)
  .then(()=>{
   
  res.status(200).send ({status:"Admin updated!!"})

  }).catch(()=>{
    console.log(err);
    res.status(500).send({status:"error with updating data",error:err.massage});
  })
   
}) 
//delete
router.route("/delete/:id").delete(async(req,res)=>{
 let userId = req.params.id;
 
 
 await Admin.findByIdAndDelete(userId)
 .then(()=>{

    res.status(200).send({status:"Admin deleted"});
 }).catch ((err)=>{
    console.log(err.massage);
    res.status(500).send({status:"error with deleting Admin",error:err.massage});
 })
})



router.route("/get/:id").get(async(req,res)=>{
    let Adminid =req.params.id;
    console.log(Adminid)
    // const user = await Admin.findbyId(Adminid)

    const admin = await Admin.findById({_id:Adminid})
    .then((ob)=>{
      res.json({data:ob})
    })
    .catch((error)=>{
      res.json(error)
  })


  

   //.then((Admin)=>{
  //  res.status(200).send({status:"Admin fetched",Admin :Admin})
  //}).catch(()=>{
   // console.log(err);
   //res.status(500).send({status:"error with get Admin",error:err.massage});
   // })





});

  //Search 

  router.get('/search/:searchInput', async (req, res) => {
    try {
      const { searchInput } = req.params;
      const users = await Admin.find({
        $or: [
          { AdminName: { $regex: searchInput, $options: 'i' } },
        
          
        ],
      });
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


module.exports = router;