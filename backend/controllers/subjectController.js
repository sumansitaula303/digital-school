import AsyncHandler from "express-async-handler";
import Admin from "../models/adminModel.js";
import Classroom from "../models/classroomModel.js";
import Subject from "../models/subjectModel.js";


//create subject
const createSubject= AsyncHandler( async (req, res)=>{
    const {name, description }= req.body;
    const classFound= await Classroom.findById(req.params.classId);
    if(!classFound){
        throw new Error("Class doesn't exist")
    }

    //create class
    const subjectCreated= await Subject.create({
        name,
        description,
        classroom: req.params.class,
        createdBy: req.userAuth._id
    })

    //push class into classroom
    classFound.subjects.push(subjectCreated._id);
    await classFound.save(); 

    res.status(201).json({
        status: "success",
        message: "subject created succesfully",
        data: subjectCreated,
    })

})


//get all classrooms
const getAllSubjects= AsyncHandler( async (req, res)=>{
    const classrooms= await Subject.find();
    res.status(200).json({
        status: "succesfull",
        message: "all classrooms fetched succesfully",
        data: classrooms
    })
});


//get single classroom

const getOneSubject= AsyncHandler( async (req, res)=>{
    const subject= await Subject.findById(req.params.id);
    if(!subject){
        throw new Error("Subject of such name doesn't exist");
    }
    else{
        res.status(200).json({
            status: "succesfull",
            message: "data retrieved of subject",
            data: subject
        })
    }
})

//update classroom
const updateSubject= AsyncHandler( async (req, res)=>{
    const {name, description}= req.body;
    const nameExist= Subject.findOne({name})
    if(name){
        throw new Error("Class of same name already exist");
    }
    const update= Subject.findByIdAndUpdate(req.params.id,{
        name,
        description,
        createdBy: req.userAuth._id
    },
    {
        new: true
    }
);
    res.status(201).json({
        status: "success",
        message: "subject updated succesfully",
        data: update
    })
});

//delete classroom
const deleteSubject= AsyncHandler( async (req, res)=>{
     await Subject.findByIdAndDelete(req.params.id);
     res.status(201).json({
        status: "success",
        message: "classroom deleted successfully"
     })
})
export {createSubject, getAllSubjects, getOneSubject, updateSubject, deleteSubject};