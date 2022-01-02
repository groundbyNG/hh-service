import Mongoose from "mongoose";

export const Respond = {
	bsonType: 'object',
	required: ['email', 'description'],
	properties: {
		email: {
			bsonType: 'string',
			$regex: /@mongodb\.com$/,
			description: 'must be a string and match the regular expression pattern',
		},
		description: {
			bsonType: 'string',
			description: 'must be a string',
		},
	},
};

export const RespondSchema = new Mongoose.Schema({
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
