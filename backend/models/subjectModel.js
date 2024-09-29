import mongoose from "mongoose";
const Schema = mongoose.Schema;

const subjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    classroom:{
      type: Schema.Types.ObjectId,
      ref: "Classroom",
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true }
);

const Subject = mongoose.model.Subject || mongoose.model("Subject", subjectSchema);

export default Subject;
