import Mongoose from "mongoose";
import { CompanySchema } from "../schemas/Company.js";

export const Company = Mongoose.model("Company", CompanySchema, 'company');
