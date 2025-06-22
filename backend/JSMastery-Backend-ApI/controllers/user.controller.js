import User from "../models/user.model.js";
import mongoose from "mongoose";
export const getUsers = async (req,res,next)=>{
    try{
        const users = await User.find()
        res.status(200).json({sucess:true,data:users})
    }
    catch(error){
        next(error)
    }
}
export const getUser = async (req, res, next) => {
    try {
        // Assuming the user ID is in req.params.id
        const user = await User.findById(req.params.id).select('-password');

        if (!user) {
            // If user is not found, create an error and pass it to the error middleware
            const error = new Error("User not found");
            error.statusCode = 404;
            return next(error); // Use return to stop further execution in this function
        }

        // If user is found, send the successful response
        res.status(200).json({ success: true, data: user });

    } catch (error) {
        // If there's any other error (e.g., invalid ID format, database error)
        // pass it to the error middleware
        next(error);
    }
};