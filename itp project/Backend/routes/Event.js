const router = require("express").Router();
const Event = require("../models/Event");

//add event
router.route("/add").post((req, res) => {
    const eventName = req.body.eventName;
    const email = req.body.email;
    const password = req.body.password;
    const idNumber = req.body.idNumber;
    const phoneNumber = req.body.phoneNumber;
    const grade = req.body.grade;
    const school = req.body.school;

    const newEvent = new Event({
        eventName,
        email,
        password,
        idNumber,
        phoneNumber,
        grade,
        school
    })
    newEvent.save().then(() => {
        res.json("Event aded succecfull")
    }).catch((err) => {
        console.log(err);
    })
})

//read
router.route("/").get((req, res) => {

    Event.find().then((Event) => {
        res.json(Event)

    }).catch((err) => {
        console.log(err)
    })

})

//update
router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { EventName,
        eemail,
        epassword,
        IdNumber,
        MobileNumber,
        Grade,
        School } = req.body;
    //user id must change
    const UpdateEvent = {

        EventName,
        eemail,
        epassword,
        IdNumber,
        MobileNumber,
        Grade,
        School


    }
    const update = await Event.findByIdAndUpdate(userId, UpdateEvent)
        .then(() => {

            res.status(200).send({ status: "Event updated" })

        }).catch(() => {
            console.log(err);
            res.status(500).send({ status: "error with updating data", error: err.massage });
        })

})

//delete
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;


    await Event.findByIdAndDelete(userId)
        .then(() => {

            res.status(200).send({ status: "Event deleted" });
        }).catch((err) => {
            console.log(err.massage);
            res.status(500).send({ status: "error with deleting Event", error: err.massage });
        })
})

router.route("/get/:id").get(async (req, res) => {
    let Eventid = req.params.id;
    console.log(Eventid)
    // const user = await Event.findbyId(Eventid)

    const event = await Event.findById(Eventid)
        .then((ob) => {
            res.json({ data: ob })
        })
        .catch((error) => {
            res.json(error)
        })

    //.then((Event)=>{
    //  res.status(200).send({status:"Event fetched",Event :Event})
    //}).catch(()=>{
    // console.log(err);
    //res.status(500).send({status:"error with get Event",error:err.massage});
    // })

})

//Search 

router.get('/search/:searchInput', async (req, res) => {
    try {
        const { searchInput } = req.params;
        const users = await Event.find({
            $or: [
                { EventName: { $regex: searchInput, $options: 'i' } },


            ],
        });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




module.exports = router;