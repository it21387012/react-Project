const router = require("express").Router();
const Payment = require("../models/Payment");



//add item
router.route("/add").post((req, res) => {
    const PStudentName = req.body.PStudentName;
    const PClassname = req.body.PClassname;
    const PAddress = req.body.PAddress;
    const PAmount = Number(req.body.PAmount);
    const PStudentID = Number(req.body.PStudentID);
    const Pgradeofstudy = Number(req.body.Pgradeofstudy);
    const PGrade = req.body.PGrade;

    const newPayment = new Payment({
        PStudentName,
        PClassname,
        PAddress,
        PAmount,
        PStudentID,
        Pgradeofstudy,
        PGrade

    })
    newPayment.save().then(() => {
        res.json("Payment added")
    }).catch((err) => {
        console.log(err);
    })

})

//read
router.route("/").get((req, res) => {

    Payment.find().then((Payment) => {
        res.json(Payment)

    }).catch((err) => {
        console.log(err)
    })

})
//update
router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { PStudentName,
        PClassname,
        PAddress,
        PAmount,
        PStudentID,
        Pgradeofstudy,
        PGrade } = req.body;
    //user id must change
    const UpdatePayment = {

        PStudentName,
        PClassname,
        PAddress,
        PAmount,
        PStudentID,
        Pgradeofstudy,
        PGrade


    }
    const update = await Payment.findByIdAndUpdate(userId, UpdatePayment)
        .then(() => {

            res.status(200).send({ status: "Payment updated" })

        }).catch(() => {
            console.log(err);
            res.status(500).send({ status: "error with updating data", error: err.massage });
        })

})
//delete
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;


    await Payment.findByIdAndDelete(userId)
        .then(() => {

            res.status(200).send({ status: "Payment deleted" });
        }).catch((err) => {
            console.log(err.massage);
            res.status(500).send({ status: "error with deleting Payment", error: err.massage });
        })
})

router.route("/get/:id").get(async (req, res) => {
    let Paymentid = req.params.id;
    console.log(Paymentid)
    // const user = await Student.findbyId(Studentid)

    const payment = await Payment.findById(Paymentid)
        .then((ob) => {
            res.json({ data: ob })
        })
        .catch((error) => {
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
        const users = await Payment.find({
            $or: [
                { PaymentName: { $regex: searchInput, $options: 'i' } },


            ],
        });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
