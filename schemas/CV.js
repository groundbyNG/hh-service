import Mongoose from "mongoose";

export const CV = {
	bsonType: 'object',
	required: ['email', 'position', 'skills', 'experience', 'salary', 'description'],
	description: 'required',
	properties: {
		email: {
			bsonType: 'string',
			$regex: /@mongodb\.com$/,
			description: 'must be a string and match the regular expression pattern',
    },
    position: {
			bsonType: 'string',
			description: 'must be a string',
    },
    skills: {
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
		salary: {
			bsonType: 'number',
			description: 'must be a number',
		},
	},
};

export const CVSchema = new Mongoose.Schema({
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
