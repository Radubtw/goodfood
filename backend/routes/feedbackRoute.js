import express from 'express';
import { addFeedback } from '../controllers/feedbackController.js';
const feedbackRouter = express.Router();

feedbackRouter.post("/add", addFeedback);

export default feedbackRouter;