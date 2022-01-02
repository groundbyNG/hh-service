import Mongoose from "mongoose";
import { UserSchema } from "../schemas/User.js";

export const User = Mongoose.model("User", UserSchema, 'user');
