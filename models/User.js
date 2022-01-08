import Mongoose from "mongoose";
import UserSchema from "../schemas/user/mongoose.js";

export const User = Mongoose.model("User", UserSchema, 'user');
