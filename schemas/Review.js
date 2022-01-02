import Mongoose from "mongoose";

export const Review = {
	bsonType: 'object',
	required: ['description'],
	properties: {
		position: {
			bsonType: 'string',
			description: 'must be a string',
		},
		description: {
			bsonType: 'string',
			description: 'must be a string',
		},
		experience: {
			bsonType: 'number',
			description: 'must be a number',
		},
	},
};

export const ReviewSchema = new Mongoose.Schema({
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
