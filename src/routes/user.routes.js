import { Router } from "express";
import { registerUser } from "../controller/User.controller.js";

const userRoutes = Router();

userRoutes.route('/register').post(registerUser)

export default userRoutes;