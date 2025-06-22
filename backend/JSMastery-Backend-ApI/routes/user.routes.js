import { Router } from "express";
import { getUser } from "../controllers/user.controller.js";
import { getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/",getUsers)
userRouter.get("/:id", getUser)
userRouter.post("/",(req,res)=>{
    res.send({title:"ADD new users"})
})
userRouter.put("/:id",(req,res)=>{
    res.send({title:"UPDATE a user"})
})
userRouter.delete("/:id",(req,res)=>{
    res.send({title:"DELETE a user"})
})
export default userRouter;