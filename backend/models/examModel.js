import mongoose from "mongoose";
const Schema= mongoose.Schema;
const examSchema= new Schema({
    name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      subject: {
        type: Schema.Types.ObjectId,
        ref: "Subject",
        required: true,
      },
      classroom: {
        type: Schema.Types.ObjectId,
        ref: "Classroom",
        required: true,
      },
      passMark: {
        type: Number,
        required: true,
        default: 50,
      },
      totalMark: {
        type: Number,
        required: true,
        default: 100,
      },
      duration: {
        type: String,
        required: true,
        default: "30 minutes",
      },
      examDate: {
        type: Date,
        required: true,
        default: new Date(),
      },
      examTime: {
        type: String,
        required: true,
      },
      examType: {
        type: String,
        required: true,
        default: "Quiz",
      },
      examStatus: {
        type: String,
        required: true,
        default: "pending",
        enum: ["pending", "live"],
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: "Teacher",
        required: true,
      },
})