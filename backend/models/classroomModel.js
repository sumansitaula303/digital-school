import mongoose from "mongoose";
const Schema= mongoose.Schema;

const classroomSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    // created automatically
    // code: {
    //   type: String,
    //   default: function () {
    //     return (
    //       this.name
    //         .split(" ")
    //         .map(name => name[0])
    //         .join("")
    //         .toUpperCase() +
    //       Math.floor(10 + Math.random() * 90) +
    //       Math.floor(10 + Math.random() * 90)
    //     );
    //   },
    // },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    //we will push the teachers that are in charge of the program
    teachers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Teacher",
        default: []
      },
    ],
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
        default: [],
      },
    ],
    //we will push the subjects that are in the program when the program is created
    subjects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Subject",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Classroom = mongoose.models.Classroom || mongoose.model('Classroom', classroomSchema);
export default Classroom