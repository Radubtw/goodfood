import express from 'express';
import { addReservation } from '../controllers/reserveController.js';

const reserveRouter = express.Router();

reserveRouter.post("/add", addReservation);


export default reserveRouter;