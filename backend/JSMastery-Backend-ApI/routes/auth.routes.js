import { Router } from "express";
import { signIn,signUp,signOut } from "../controllers/auth.controller.js";

const authRouter = Router();
const testApi =(req,res)=>{
    res.send({status:"achieved"})
}
authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.post("/sign-out", signOut);
export default authRouter;
