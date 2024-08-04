import homeworkModel from "../models/homeworkModel.js";

const addHomework= async (req, res)=>{
    console.log(req.body)
    const homework= new homeworkModel(req.body);
    if(!req.body){
        console.log("wtf")

    }
    try {
        await homework.save();
        res.json({success: true, message: "homework added"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "failed"})
    }
}

export {addHomework};