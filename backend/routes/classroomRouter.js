import express from 'express';
import { isLogin } from '../middleware/isLogin.js';
import isAdmin from '../middleware/isAdmin.js';
import { createClassroom, deleteClassroom, getAllClassrooms, getOneClassroom, updateClassroom } from '../controllers/classroomController.js';

const classroomRouter= express.Router();

classroomRouter.post("/create",isLogin, isAdmin, createClassroom);
classroomRouter.get("/getAll",isLogin, getAllClassrooms);
classroomRouter.get("/getOne/:id", isLogin, getOneClassroom);
classroomRouter.put("/update/:id", isLogin, isAdmin, updateClassroom);
classroomRouter.put("/delete/:id", isLogin, isAdmin, deleteClassroom);


export default classroomRouter;