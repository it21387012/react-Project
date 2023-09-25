const router = require("express").Router();
const Exam = require("../models/ExamUnit");


//add item
router.route("/add").post((req,res)=>{
  const StudentName =req.body.StudentName;
  const StudentID = req.body.StudentID;
  const Subject = req.body.Subject;
  const Place = Number( req.body.Place);
  const Avarage=Number(req.body.Avarage);
  const gradeofstudy =Number(req.body.gradeofstudy);
  const Grade = req.body.Grade;

    const newExam = new Exam({
      StudentName,
      StudentID,
      Subject,
      Place,
      Avarage,
      gradeofstudy,
      Grade
        
 })
     newExam.save().then(() => {
        res.json("Exam added")
}).catch ((err)=>{
    console.log(err);
})

})
 
//read
router.route ("/").get((req,res) => {

    Exam.find().then((Exam) => {   
        res.json(Exam) 

    }).catch((err) => {
        console.log(err)
    })

})
//update
router.route ("/update/:id").put(async (req,res) => {
   let userId  = req.params.id;
   const {StudentName,
    StudentID,
    Subject,
    Place,
    Avarage,
    gradeofstudy,
    Grade } = req.body;
//user id must change
  const UpdateExam = {

    StudentName,
      StudentID,
      Subject,
      Place,
      Avarage,
      gradeofstudy,
      Grade


  }
  const update = await Exam.findByIdAndUpdate(userId,UpdateExam)
  .then(()=>{
   
  res.status(200).send ({status:"Exam updated"})

  }).catch(()=>{
    console.log(err);
    res.status(500).send({status:"error with updating data",error:err.massage});
  })
   
}) 
//delete
router.route("/delete/:id").delete(async(req,res)=>{
 let userId = req.params.id;
 
 
 await Exam.findByIdAndDelete(userId)
 .then(()=>{

    res.status(200).send({status:"Exam deleted"});
 }).catch ((err)=>{
    console.log(err.massage);
    res.status(500).send({status:"error with deleting Exam",error:err.massage});
 })
})



router.route("/get/:id").get(async(req,res)=>{
  let Examid =req.params.id;
  console.log(Examid)
  // const user = await Exam.findbyId(Examid)

  const exam = await Exam.findById(Examid)
  .then((ob)=>{
    res.json({data:ob})
  })
  .catch((error)=>{
    res.json(error)
  })


  

   //.then((Exam)=>{
  //  res.status(200).send({status:"Exam fetched",Exam :Exam})
  //}).catch(()=>{
   // console.log(err);
   //res.status(500).send({status:"error with get Exam",error:err.massage});
   // })





})

  //Search 

  router.get('/search/:searchInput', async (req, res) => {
    try {
      const { searchInput } = req.params;
      const users = await Exam.find({
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
