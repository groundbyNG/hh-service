import Mongoose from "mongoose";
import CV from "../cv/mongoose.js";
import Respond from "../respond/mongoose.js";

export const User = new Mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	cv: [CV],
	responded: {
		type: [Respond],
		default: [],
	},
});

export default User;
