import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import { JWT_EXPIRY, JWT_SECRET } from "../config/env.js";

export const signUp = async (req,res,next) =>{
    const session = await mongoose.startSession()
    session.startTransaction();
try{
const {name,email,password} = req.body

const existingUser = await User.findOne({
    email
})

if(existingUser){
const error = new Error ('User already exists');
error.statusCode = 409;
throw error;
}

const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password,salt)

const newUsers = await User.create([{
    name, email, password:hashedPassword
}],{session})
// console.log('JWT_EXPIRY:', JWT_EXPIRY);

const token = jwt.sign({userId:newUsers[0]._id}, JWT_SECRET, {expiresIn:JWT_EXPIRY})
await session.commitTransaction();
session.endSession();
res.status(201).json({
    success:true,
    message: 'User created succesfully',
    data:{
        token,
        user: newUsers[0]
    }
})
}catch(error){
    await session.abortTransaction();
    session.endSession();
    next(error);
}
}

export const signIn = (req,res,next) =>{

}
export const signOut = (req,res,next) =>{

}
