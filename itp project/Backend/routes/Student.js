const router = require("express").Router();
const Student = require("../models/Student");


//add item
router.route("/add").post((req,res)=>{
  const StudentName =req.body.StudentName;
  const email = req.body.email;
  const password = req.body.password;
  const Age = Number( req.body.Age);
  const phonenumber=Number(req.body.phonenumber);
  const gradeofstudy =Number(req.body.gradeofstudy);
  const homeaddress = req.body.homeaddress;

    const newStudent = new Student({
      StudentName,
      email,
      password,
      Age,
      phonenumber,
      gradeofstudy,
      homeaddress
        
 })
     newStudent.save().then(() => {
        res.json("Student added")
}).catch ((err)=>{
    console.log(err);
})

})

//Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find employee by NIC and password
  Student.findOne({email, password }, (err, foundStudent) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err
      });
    }

    if (!foundStudent) {
      return res.status(400).json({
        success: false,
        error: "Invalid Email or password"
      });
    }

    return res.status(200).json({
      success: true,
      Student: foundStudent
      });
  });
});
 
//read
router.route ("/").get((req,res) => {

    Student.find().then((Student) => {   
        res.json(Student) 

    }).catch((err) => {
        console.log(err)
    })

})
//update
router.route ("/update/:id").put(async (req,res) => {
   let userId  = req.params.id;
   const {StudentName,
    email,
    password,
    Age,
    phonenumber,
    gradeofstudy,
    homeaddress } = req.body;
//user id must change
  const UpdateStudent = {

    StudentName,
      email,
      password,
      Age,
      phonenumber,
      gradeofstudy,
      homeaddress


  }
  const update = await Student.findByIdAndUpdate(userId,UpdateStudent)
  .then(()=>{
   
  res.status(200).send ({status:"Student updated"})

  }).catch(()=>{
    console.log(err);
    res.status(500).send({status:"error with updating data",error:err.massage});
  })
   
}) 
//delete
router.route("/delete/:id").delete(async(req,res)=>{
 let userId = req.params.id;
 
 
 await Student.findByIdAndDelete(userId)
 .then(()=>{

    res.status(200).send({status:"Student deleted"});
 }).catch ((err)=>{
    console.log(err.massage);
    res.status(500).send({status:"error with deleting Student",error:err.massage});
 })
})



router.route("/get/:id").get(async(req,res)=>{
  let Studentid =req.params.id;
  console.log(Studentid)
  // const user = await Student.findbyId(Studentid)

  const student = await Student.findById(Studentid)
  .then((ob)=>{
    res.json({data:ob})
  })
  .catch((error)=>{
    res.json(error)
  })


  

   //.then((Student)=>{
  //  res.status(200).send({status:"Student fetched",Student :Student})
  //}).catch(()=>{
   // console.log(err);
   //res.status(500).send({status:"error with get Student",error:err.massage});
   // })





})

  //Search 

  router.get('/search/:searchInput', async (req, res) => {
    try {
      const { searchInput } = req.params;
      const users = await Student.find({
        $or: [
          { StudentName: { $regex: searchInput, $options: 'i' } },
        
          
        ],
      });
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


module.exports = router;
