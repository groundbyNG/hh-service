import Mongoose from "mongoose";

const Respond = new Mongoose.Schema({
	email: {
		type: String,
		required: true,
		validate: /@mongodb\.com$/,
	},
	description: {
		type: String,
		required: true,
	},
});

export default Respond;
