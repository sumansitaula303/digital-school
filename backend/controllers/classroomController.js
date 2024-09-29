import AsyncHandler from "express-async-handler";
import Admin from "../models/adminModel.js";
import Classroom from "../models/classroomModel.js";


//create classroom
const createClassroom= AsyncHandler( async (req, res)=>{
    const {name, description, }= req.body;
    const classFound= await Classroom.findOne({name});
    if(classFound){
        throw new Error("Class already exist")
    }

    //create class
    const classroomCreated= await Classroom.create({
        name,
        description,
        createdBy: req.userAuth._id
    })

    //push class into admin
    const admin= await Admin.findById(req.userAuth._id);
    admin.classrooms.push(classroomCreated._id);
    await admin.save();
    res.status(201).json({
        status: "success",
        message: "classroom created succesfully",
        data: classroomCreated,
    })

})


//get all classrooms
const getAllClassrooms= AsyncHandler( async (req, res)=>{
    const classrooms= await Classroom.find();
    res.status(200).json({
        status: "succesfull",
        message: "all classrooms fetched succesfully",
        data: classrooms
    })
});


//get single classroom

const getOneClassroom= AsyncHandler( async (req, res)=>{
    const classroom= await Classroom.findOne({name: `${req.params.id}`});
    if(!classroom){
        throw new Error("Classsroom of such name doesn't exist");
    }
    else{
        res.status(200).json({
            status: "succesfull",
            message: "data retrieved of classroom",
            data: classroom
        })
    }
})

//update classroom
const updateClassroom= AsyncHandler( async (req, res)=>{
    const {name, description}= req.body;
    const nameExist= Classroom.findOne({name})
    if(name){
        throw new Error("Class of same name already exist");
    }
    const update= Classroom.findByIdAndUpdate(req.params.id,{
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
        message: "classroom updated succesfully",
        data: update
    })
});

//delete classroom
const deleteClassroom= AsyncHandler( async (req, res)=>{
     await Classroom.findByIdAndDelete(req.params.id);
     res.status(201).json({
        status: "success",
        message: "classroom deleted successfully"
     })
})
export {createClassroom, getAllClassrooms, getOneClassroom, updateClassroom, deleteClassroom};