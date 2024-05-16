import reserveModel from "../models/reserveModel.js";

//add reservation

const addReservation = async (req, res) => {
    console.log(req.body); // Log the request body to inspect the received data

    const reserve = new reserveModel({
        capacity: req.body.capacity,
        year: req.body.year,
        month: req.body.month,
        day: req.body.day,
        hour: req.body.hour,
        minute: req.body.minute,
    });
    try{
        await reserve.save();
        res.json({success:true, message:"Reservation Added"})
    } catch(error){
        console.log(error)
        res.json({success:false, message:"Error"})
    }
    console.log(req.json);
    console.log(req.body);
}


const listReservations = async (req, res) => {
    try {
        const reservations = await reserveModel.find({})
        res.json({ success: true, data: reservations })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export {addReservation, listReservations}