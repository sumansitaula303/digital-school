import mongoose from "mongoose";
const Schema = mongoose.Schema;

const adminSchema= new Schema({
  name: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String, 
    default: "admin"
  },
  classrooms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classroom"
  }],
  teachers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher"
  }],
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  }]
},
{
  timestamps: true
}
);

const Admin = mongoose.models.admin || mongoose.model('admin', adminSchema);
export default Admin;
