import AsyncHandler from "express-async-handler";
import Admin from "../models/adminModel.js";
import generateToken from "../utils/tokenGenerator.js";
import bcrypt from "bcrypt";
import {hashPassword, isPassMatched} from "../utils/helpers.js";


//signup admin
const registerAdminController = AsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
      //Check if email exists
      const adminFound = await Admin.findOne({ email });
      if (adminFound) {
        throw new Error("Admin Exists");
      }

      //register
      const user = await Admin.create({
        name,
        email,
        password: await hashPassword(password),
      });
      res.status(201).json({
        status: "success",
        data: user,
        message: "Admin registered succesfully"
      });
  });


  //login admin
const loginAdminController= AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
    //find user
    const user = await Admin.findOne({ email });
    if (!user) {
      return res.json({ message: "Invliad login crendentials" });
    }

    //verify password
    const isMatched= await bcrypt.compare(password, user.password);
    if(!isMatched){
      return res.json({message: "Invalid login credentials"})
    }
    else{
      return res.json({ data: generateToken(user._id), message: "Admin logged in successfully" });
    }
});


//get all admins
  const getAllAdmins= AsyncHandler(async (req, res)=> {
    const admins= await Admin.find();
    res.status(200).json({
      status: "success",
      data: admins,
      message: "admins data fetched successfully"
    })
  })


  // get one admin
  const getAdmin= AsyncHandler(async (req, res) => {
    const admin = await Admin.findById(req.userAuth._id).select(
      "-password -createdAt -updatedAt"
    ).populate("classrooms");
    if (!admin) {
      throw new Error("Admin Not Found");
    } else {
      res.status(200).json({
        status: "success",
        data: admin,
        message: "admin profile retrieved succesfully"
      });
    }
  });

  
  //update admin profile
  const updateAdminProfile= AsyncHandler(async (req, res)=>{
    const {email, password, name}= req.body;
    const emailExist= await Admin.findOne({email});
    if(emailExist){
      throw new Error("email is already taken");
    }

    //hash password
    
    if(password){
      const admin= await Admin.findByIdAndUpdate(req.userAuth._id,{
        email,
        password: await hashPassword(password),
        name
      },
    {
      new: true,
      runValidators: true,
    });
      res.status(200).json({
        status: "success",
        message: "profile updates succesfully",
        data: admin
      });
    }
      else{
        const admin= await Admin.findByIdAndUpdate(req.userAuth._id,{
          email,
          name
        },
      {
        new: true,
        runValidators: true,
      });
        res.status(200).json({
          status: "success",
          message: "profile updates succesfully",
          data: admin
        });
      }
  })

export {registerAdminController, loginAdminController, getAllAdmins, getAdmin, updateAdminProfile}; 