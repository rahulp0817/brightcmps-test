import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/test"); // use docker image 

const userSchema = new mongoose.Schema({
  fullname: {
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
    required: true,
  }
})

const User = mongoose.model("User", userSchema);
export { User }