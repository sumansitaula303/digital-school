import express from 'express';
import { isLogin } from '../middleware/isLogin.js';
import isAdmin from '../middleware/isAdmin.js';
import { createSubject, deleteSubject, getAllSubjects, getOneSubject, updateSubject } from '../controllers/subjectController.js';
const subjectRouter= express.Router();

subjectRouter.post("/create/:classId",isLogin, isAdmin, createSubject);
subjectRouter.get("/getAll",isLogin, getAllSubjects);
subjectRouter.get("/getOne/:id", isLogin, getOneSubject);
subjectRouter.put("/update/:id", isLogin, isAdmin, updateSubject);
subjectRouter.put("/delete/:id", isLogin, isAdmin, deleteSubject);


export default subjectRouter;