import Mongoose from "mongoose";
import CompanySchema from "../schemas/company/mongoose.js";

export const Company = Mongoose.model("Company", CompanySchema, 'company');
