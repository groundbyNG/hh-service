import Mongoose from "mongoose";

export const Vacancy = {
	bsonType: 'object',
	required: ['position', 'description'],
	description: 'required',
	properties: {
		position: {
			bsonType: 'string',
			description: 'must be a string',
		},
		description: {
			bsonType: 'string',
			description: 'must be a string',
		},
		city: {
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

export const VacancySchema = new Mongoose.Schema({
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
