import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    minLength: 2,
    maxLength: 50,
  },
  email:{
    type: String,
    required: [true,"Email is Required"],
    trim: true,
    lowercase:true,
    minLength:5,
    maxLength:255,
    match: [/\S+@\S+\.\S+/,'Please Enter a valid email address']
  },
  password:{
type:String,
required:[true, "Please enter your Password"],
minLength: 6,
  }
}, {timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;
