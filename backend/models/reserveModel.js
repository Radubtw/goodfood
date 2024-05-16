import mongoose from "mongoose";

const reserveSchema = new mongoose.Schema({
    capacity: {type:Number, required:true},
    year: {type:Number, required:true},
    month: {type:Number, required:true},
    day: {type:Number, required:true},
    hour: {type:Number, required:true},
    minute: {type:Number, required:true}  
})

const reserveModel = mongoose.models.reserve || mongoose.model("reserve", reserveSchema);

export default reserveModel;