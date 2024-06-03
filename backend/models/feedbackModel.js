import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    email: {type:Number, required:true},
    feedback: {type: Number, required: true }
});

const feedbackModel = mongoose.models.feedback || mongoose.model("feedback", feedbackSchema);

export default feedbackModel;