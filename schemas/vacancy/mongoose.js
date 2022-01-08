import Mongoose from "mongoose";

export const Vacancy = new Mongoose.Schema({
	position: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	city: {
		type: String,
	},
	experience: {
		type: Number,
	},
	salary: {
		type: Number,
	},
});

export default Vacancy;
