import mongoose from "mongoose";
const Schema = mongoose.Schema;

const homeWorkSchema= new Schema({
    title: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true,
    },
    className: {
        type: String,
        required: true,
    }
})
const homeworkModel= mongoose.models.homework || mongoose.model("homework", homeWorkSchema)
export default homeworkModel;