import mongoose from "mongoose";
const Schema = mongoose.Schema;

const adminSchema= new Schema({
  name: {
    type: String,
    requird: true
  },
  email: {
    type: String,
    requird: true,
    unique: true
  },
  password: {
    type: String,
    requird: true
  },
  role: {
    type: String,
    default: "admin"
  }
},
{
  timestamps: true
}
)

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);
export default Admin;
