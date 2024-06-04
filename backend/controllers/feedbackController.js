import feedbackModel from "../models/feedbackModel.js";

const addFeedback = async (req, res) => {
    console.log(req.body); // Log the request body to inspect the received data

    const feedbackData = req.body; // Assuming req.body contains JSON data with feedback details

    // Construct a new feedback object using the received JSON data
    const feedback = new feedbackModel({
        email: feedbackData.email,
        feedback: feedbackData.feedback
    });

    try {
        // Save the feedback to the database
        await feedback.save();
        res.json({ success: true, message: "Feedback Added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
};

export { addFeedback };
