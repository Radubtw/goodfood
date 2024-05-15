import mongoose from "mongoose";

const reserveSchema = new mongoose.Schema({
    capacity: {type:String, required:true},
    year: {type:String, required:true},
    month: {type:String, required:true},
    day: {type:String, required:true},
    hour: {type:String, required:true},
    minute: {type:String, required:true},

    
})

const reserveModel = /*mongoose.models.reserve ||*/ mongoose.model("reservations", reserveSchema)

export default reserveModel;