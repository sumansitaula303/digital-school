import mongoose from "mongoose";
const Schema= mongoose.Schema;

const teacherSchema = new Schema(
    {
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
      dateEmployed: {
        type: Date,
        default: Date.now,
      },
      teacherId: {
        type: String,
        required: true,
        default: function () {
          return (
            "TEA" +
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
      //if witdrawn, the teacher will not be able to login
      isWitdrawn: {
        type: Boolean,
        default: false,
      },
      //if suspended, the teacher can login but cannot perform any task
      isSuspended: {
        type: Boolean,
        default: false,
      },
      role: {
        type: String,
        default: "teacher",
      },
      subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        // required: true,
      }],
  
      program: {
        type: String,
      },
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        // required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  const Teacher= mongoose.model.Teacher || mongoose.model("Teacher", teacherSchema);
  export default Teacher;
  