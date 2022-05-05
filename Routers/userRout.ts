import { Router } from "express";
import {register, login,getAllUsers,numOfImages,getUser}  from "../Controllers/userController";


const userRoute = Router();

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/",getAllUsers);
userRoute.get("/:id",getUser);
userRoute.put("/images",numOfImages);

export default userRoute;


