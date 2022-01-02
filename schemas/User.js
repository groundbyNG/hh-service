import Mongoose from "mongoose";
import { CV, CVSchema } from "./CV.js";
import { Respond, RespondSchema } from "./Respond.js";

export const User = {
	bsonType: 'object',
	required: ['cv', 'name'],
	properties: {
    name: {
			bsonType: 'string',
			description: 'must be a string',
		},
		cv: CV,
		responded: Respond,
	},
};

export const UserSchema = new Mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	cv: [CVSchema],
	responded: {
		type: [RespondSchema],
		default: [],
	},
});
