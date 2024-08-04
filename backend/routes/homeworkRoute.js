import express from 'express'
import { addHomework } from '../controllers/homeworkController.js'

const homeworkRouter= express.Router();

homeworkRouter.post("/add", addHomework)
export default homeworkRouter;