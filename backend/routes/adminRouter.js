import express from 'express'
import { getAllAdmins, registerAdminController, loginAdminController, getAdmin, updateAdminProfile } from '../controllers/adminController.js';
import { isLogin } from '../middleware/isLogin.js';
import isAdmin from '../middleware/isAdmin.js';
const adminRouter= express.Router();

//get all admins
adminRouter.get("/getAdmins", isLogin, getAllAdmins);

//get one admin
adminRouter.get("/profile",isLogin, isAdmin, getAdmin);

//register admin
adminRouter.post("/register", registerAdminController)

//login admin
adminRouter.post("/login", loginAdminController);

//delete admin
adminRouter.delete("/delete/:id",(req, res)=>{
    //replace this func with controller
});

//update
adminRouter.put("/update", isLogin, isAdmin, updateAdminProfile);

export default adminRouter;