import mongoose from "mongoose";
import { genSalt, hash, compare } from "bcryptjs";
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
  }
},
{
  timestamps: true
}
);
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  //salt
  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
  next();
});

//verifyPassword
adminSchema.methods.verifyPassword = async function (enteredPassword) {
  return await compare(enteredPassword, this.password);
};

const Admin = mongoose.models.admin || mongoose.model('admin', adminSchema);
export default Admin;
