import express from 'express'
import { getAllAdmins, registerAdminController, loginAdminController } from '../controllers/adminController.js';
import { isLogin } from '../middleware/isLogin.js';
const adminRouter= express.Router();

//get all admins
adminRouter.get("/getAdmins", isLogin, getAllAdmins);

//get one admin
adminRouter.get("/:id",(req, res)=>{
    //replace this func with controller
});

//register admin
adminRouter.post("/register", registerAdminController)

//login admin
adminRouter.post("/login", loginAdminController);

//delete admin
adminRouter.delete("/delete/:id",(req, res)=>{
    //replace this func with controller
});

//update
adminRouter.put("/update/:id",(req, res)=>{
    //replace this func with controller
});

export default adminRouter;