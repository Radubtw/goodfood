import express from 'express';
import { addFeedback, getFeedbackByEmail } from '../controllers/feedbackController.js';
const feedbackRouter = express.Router();

feedbackRouter.post("/add", addFeedback);
feedbackRouter.get("/:email", getFeedbackByEmail);

export default feedbackRouter;