const router = require("express").Router();
const Teacher = require("../models/Teacher");


//add item
router.route("/add").post((req,res)=>{
  const TeacherName =req.body.TeacherName;
  const email = req.body.email;
  const gender = req.body.gender;
  const Age = Number( req.body.Age);
  const phonenumber=Number(req.body.phonenumber);
  const numberofclassestaugh =Number(req.body.numberofclassestaugh);
  const subjecttaugh = req.body.subjecttaugh;

    const newTeacher = new Teacher({
      TeacherName,
      email,
      gender,
      Age,
      phonenumber,
      numberofclassestaugh,
      subjecttaugh
        
 })
     newTeacher.save().then(() => {
        res.json("Teacher added")
}).catch ((err)=>{
    console.log(err);
})

})
 
//read
router.route ("/").get((req,res) => {

    Teacher.find().then((Teacher) => {   
        res.json(Teacher) 

    }).catch((err) => {
        console.log(err)
    })

})
//update
router.route ("/update/:id").put(async (req,res) => {
   let userId  = req.params.id;
   const {TeacherName,
    email,
    gender,
    Age,
    phonenumber,
    numberofclassestaugh,
    subjecttaugh } = req.body;
//user id must change
  const UpdateTeacher = {

    TeacherName,
      email,
      gender,
      Age,
      phonenumber,
      numberofclassestaugh,
      subjecttaugh


  }
  const update = await Teacher.findByIdAndUpdate(userId,UpdateTeacher)
  .then(()=>{
   
  res.status(200).send ({status:"Teacher updated"})

  }).catch(()=>{
    console.log(err);
    res.status(500).send({status:"error with updating data",error:err.massage});
  })
   
}) 
//delete
router.route("/delete/:id").delete(async(req,res)=>{
 let userId = req.params.id;
 
 
 await Teacher.findByIdAndDelete(userId)
 .then(()=>{

    res.status(200).send({status:"Teacher deleted"});
 }).catch ((err)=>{
    console.log(err.massage);
    res.status(500).send({status:"error with deleting Teacher",error:err.massage});
 })
})



router.route("/get/:id").get(async(req,res)=>{
  let Teacherid =req.params.id;
  console.log(Teacherid)
  // const user = await Teacher.findbyId(Teacherid)

  const teacher = await Teacher.findOne({_id:Teacherid})
  .then((ob)=>{
    res.json({data:ob})
  })
  .catch((error)=>{
    res.json(error)
  })




  

   //.then((Teacher)=>{
  //  res.status(200).send({status:"Teacher fetched",Teacher :Teacher})
  //}).catch(()=>{
   // console.log(err);
   //res.status(500).send({status:"error with get Teacher",error:err.massage});
   // })





});

  //Search 

  router.get('/search/:searchInput', async (req, res) => {
    try {
      const { searchInput } = req.params;
      const users = await Teacher.find({
        $or: [
          { TeacherName: { $regex: searchInput, $options: 'i' } },
        
          
        ],
      });
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


module.exports = router;
