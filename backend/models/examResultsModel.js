import mongoose  from "mongoose";
const Schema= mongoose.Schema;

const examResultSchema= new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true,
      },
      exam: {
        type: Schema.Types.ObjectId,
        ref: "Exam",
        required: true,
      },
      grade: {
        type: Number,
        required: true,
      },
      score: {
        type: Number,
        required: true,
      },
      passMark: {
        type: Number,
        required: true,
        default: 50,
      },
      //failed/Passed
      status: {
        type: String,
        required: true,
        enum: ["failed", "passed"],
        default: "failed",
      },
      //Excellent/Good/Poor
      remarks: {
        type: String,
        required: true,
        enum: ["Excellent", "Good", "Poor"],
        default: "Poor",
      },
      position: {
        type: Number,
        required: true,
      },
  
      subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
      },
      class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Classroom",
      },
  
})
const ExamResult= mongoose.model.ExamResult || mongoose.model("ExamResult", examResultSchema);
export default ExamResult;