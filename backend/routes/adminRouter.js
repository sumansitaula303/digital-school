import express from 'express'
import { registerAdminController } from '../controllers/adminController.js';
const adminRouter= express.Router();

//get all admins
adminRouter.get("/getAdmis",(req, res)=>{
    //replace this func with controller
});

//get one admin
adminRouter.get("/:id",(req, res)=>{
    //replace this func with controller
});

//register admin
adminRouter.put("/register", registerAdminController)

//login admin
adminRouter.put("/login",(req, res)=>{
    //replace this func with controller
});

//delete admin
adminRouter.delete("/delete/:id",(req, res)=>{
    //replace this func with controller
});

//update
adminRouter.put("/update/:id",(req, res)=>{
    //replace this func with controller
});

export default adminRouter;