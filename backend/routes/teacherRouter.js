import express from 'express'
const teacherRouter= express.Router();

//get all teacher
teacherRouter.get("/getTeachers",(req, res)=>{
    //replace this func with controller
});

//get one teacher
teacherRouter.get("/:id",(req, res)=>{
    //replace this func with controller
});

//register teacher
teacherRouter.put("/register",(req, res)=>{
    //replace this func with controller
});

//login teacher
teacherRouter.put("/login",(req, res)=>{
    //replace this func with controller
});

//delete teacher
teacherRouter.delete("/delete/:id",(req, res)=>{
    //replace this func with controller
});

//update
teacherRouter.put("/update/:id",(req, res)=>{
    //replace this func with controller
});

export default teacherRouter;