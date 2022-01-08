import Mongoose from "mongoose";

const Review = new Mongoose.Schema({
	position: {
		type: String,
	},
	description: {
		type: String,
		required: true,
	},
	experience: {
		type: String,
	},
});

export default Review;
