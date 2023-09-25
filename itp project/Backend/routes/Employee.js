const router = require("express").Router();
const Employee = require("../models/Employee");


//add item
router.route("/add").post((req,res)=>{
  const EmployeeName =req.body.EmployeeName;
  const email = req.body.email;
  //const password = req.body.password;
  //const age =  req.body.age;
  const phonenumber=req.body.phonenumber;
  const employeeid =req.body.employeeid;
  const homeaddress = req.body.homeaddress;

    const newEmployee = new Employee({
      EmployeeName,
      email,
      //password,
      //age,
      phonenumber,
      employeeid,
      homeaddress
        
 })
     newEmployee.save().then(() => {
        res.json("Employee added")
}).catch ((err)=>{
    console.log(err);
})

})
 
//read
router.route ("/").get((req,res) => {

    Employee.find().then((Employee) => {   
        res.json(Employee) 

    }).catch((err) => {
        console.log(err)
    })

})
//update
router.route ("/update/:id").put(async (req,res) => {
   let userId  = req.params.id;
   const {EmployeeName,
    email,
    password,
    age,
    phonenumber,
    employeeid,
    homeaddress } = req.body;
//user id must change
  const UpdateEmployee = {
 
    EmployeeName,
      email,
      password,
      age,
      phonenumber,
      employeeid,
      homeaddress


  }
  const update = await Employee.findByIdAndUpdate(userId,UpdateEmployee)
  .then(()=>{
   
  res.status(200).send ({status:"Employee updated"})

  }).catch(()=>{
    console.log(err);
    res.status(500).send({status:"error with updating data",error:err.massage});
  })
   
}) 
//delete
router.route("/delete/:id").delete(async(req,res)=>{
 let userId = req.params.id;
 
 
 await Employee.findByIdAndDelete(userId)
 .then(()=>{

    res.status(200).send({status:"Employee deleted"});
 }).catch ((err)=>{
    console.log(err.massage);
    res.status(500).send({status:"error with deleting Employee",error:err.massage});
 })
})



router.route("/get/:id").get(async(req,res)=>{
  let Employeeid =req.params.id;
  console.log(Employeeid)
  // const user = await Employee.findbyId(Employeeid)

  const employee = await Employee.findById(Employeeid)
  .then((ob)=>{
    res.json({data:ob})
  })
  .catch((error)=>{
    res.json(error)
  })


  

   //.then((Employee)=>{
  //  res.status(200).send({status:"Employee fetched",Employee :Employee})
  //}).catch(()=>{
   // console.log(err);
   //res.status(500).send({status:"error with get Employee",error:err.massage});
   // })





})

  //Search 

  router.get('/search/:searchInput', async (req, res) => {
    try {
      const { searchInput } = req.params;
      const users = await Employee.find({
        $or: [
          { EmployeeName: { $regex: searchInput, $options: 'i' } },
        
          
        ],
      });
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


module.exports = router;
