import mongoose from "mongoose";
const Schema= new mongoose.Schema;

const studentSchema= new Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      studentId: {
        type: String,
        required: true,
        default: function () {
          return (
            "STU" +
            Math.floor(100 + Math.random() * 900) +
            Date.now().toString().slice(2, 4) +
            this.name
              .split(" ")
              .map(name => name[0])
              .join("")
              .toUpperCase()
          );
        },
      },
      role: {
        type: String,
        default: "student",
      },
      class: {
        type: Schema.Types.ObjectId,
        ref: "Classroom",
        required: true
      },
      dateAdmitted: {
        type: Date,
        default: Date.now,
      },
  
      examResults: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ExamResult",
        },
      ],
  
})
const Student= mongoose.model.Student || mongoose.model("Student", studentSchema);
export default Student;