import mongoose from "mongoose";
export const connectDB= async ()=>{
await mongoose.connect("mongodb+srv://sitaulasuman303:gGl90oDn7huhRBrw@cluster0.7wje4yb.mongodb.net/digital-school").then(()=>console.log("database connected"));
}