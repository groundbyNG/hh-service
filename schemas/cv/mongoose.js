import Mongoose from "mongoose";

const CV = new Mongoose.Schema({
	email: {
		type: String,
		required: true,
		validate: /@mongodb\.com$/,
	},
	position: {
		type: String,
		required: true,
	},
	skills: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	experience: {
		type: Number,
		required: true,
	},
	salary: {
		type: Number,
		required: true,
	},
});

export default CV;

