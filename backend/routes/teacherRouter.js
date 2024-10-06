import express from 'express'
import { adminRegisterTeacher, teacherLogin } from '../controllers/teachersController.js';
const teacherRouter= express.Router();

//get all teacher
teacherRouter.get("/getAll",(req, res)=>{
    //replace this func with controller
});

//get one teacher
teacherRouter.get("/getOne",(req, res)=>{
    //replace this func with controller
});

//register teacher
teacherRouter.post("/register", adminRegisterTeacher);

//login teacher
teacherRouter.post("/login", teacherLogin);

//delete teacher
teacherRouter.delete("/delete/:id",(req, res)=>{
    //replace this func with controller
});

//update
teacherRouter.put("/update/:id",(req, res)=>{
    //replace this func with controller
});

export default teacherRouter;