import AsyncHandler from "express-async-handler";
import Admin from "../models/adminModel.js";
import generateToken from "../utils/tokenGenerator.js";
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
        password,
      });
      res.status(201).json({
        status: "success",
        data: user,
      });
  });
const loginAdminController= AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

    //find user
    const user = await Admin.findOne({ email });
    if (!user) {
      return res.json({ message: "Invliad login crendentials" });
    }
    if (user && (await user.verifyPassword(password))) {
      req.userAuth= user;
      return res.json({ data: generateToken(user._id) });
    } else {
      return res.json({ message: "Invliad login crendentials" });
    }
});
  const getAllAdmins= async (req, res)=> {
    res.json({msg: "all users"})
  }

export {registerAdminController, loginAdminController, getAllAdmins};