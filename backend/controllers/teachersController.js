import AsyncHandler from "express-async-handler";
import Teacher from "../models/teachersModel.js";
import { hashPassword, isPassMatched } from "../utils/helpers.js";
import generateToken from "../utils/tokenGenerator.js";

// Admin register teacher
// api/teachers/admin/register

const adminRegisterTeacher= AsyncHandler( async (req, res)=> {
    const {name, email, password}= req.body;
    const teacherExist= await Teacher.findOne({email});
    if(teacherExist){
        throw new Error("Teacher of this email already exist")
    }
    const hashedPassword= await hashPassword(password);
    const newTeacher= await Teacher.create({
        name,
        email,
        password: hashedPassword
    })
    res.status(201).json({
         status: "success",
         message: "Teacher created succesfully",
         data: newTeacher,
    })
})

//  login teacher
//  /api/teachers/login
const teacherLogin= AsyncHandler ( async (req, res)=>{
    const {email, password}= req.body;
    const teacher= await Teacher.findOne({email});
    if(!teacher){
        throw new Error("Teacher does not exist")
    }
    const isMatched= await isPassMatched(password, teacher?.password);
    if(!isMatched){
        throw new Error("Invalid login credentials");
    }
    else{
        res.status(200).json({
            status: "success",
            message: "login successfull",
            data: generateToken(teacher._id),
        })
    }
    
})

//get all teachers
const getAllTeachers= AsyncHandler( async (req, res)=>{
    const allTeacher= await Teacher.find();
    if(allTeacher){
        res.status(200).json({
            status: "success",
            message: "All teachers retrieved",
            data: allTeacher
        })
    }
})

export {adminRegisterTeacher, teacherLogin, getAllTeachers};