import Mongoose from "mongoose";
import Vacancy from "../vacancy/mongoose.js";
import Respond from "../respond/mongoose.js";
import Review from "../review/mongoose.js";

const Company = new Mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	vacancies: {
		type: [Vacancy],
		required: true,
	},
	responded: {
		type: [Respond],
		default: [],
	},
	reviews: {
		type: [Review],
		default: [],
	}
}, { shardKey: { "_id": "hashed" } });

export default Company;
