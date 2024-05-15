import reserveModel from "../models/reserveModel.js";
import fs from 'fs';


//add reservation

const addReservation = async (req, res) => {
    console.log(req.body.date);
    const reservation = new reserveModel({
        capacity:req.body.capacity,
        year:req.body.year,
        month:req.body.month,
        day:req.body.day,
        hour:req.body.hour,
        minute:req.body.minute,

    })
    try{
        await reservation.save()
        res.json({success:true, message:"Reservation Added"})
    } catch(error){
        console.log(error)
        res.json({succes:false, message:"Error"})
    }
}

export {addReservation}