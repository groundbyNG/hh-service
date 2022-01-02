import Mongoose from "mongoose";
import { Vacancy, VacancySchema } from "./Vacancy.js";
import { Respond, RespondSchema } from "./Respond.js";
import { Review, ReviewSchema } from "./Review.js";

export const Company = {
	bsonType: 'object',
	required: ['name', 'vacancies'],
	properties: {
		name: {
			bsonType: 'string',
			description: 'must be a string',
		},
		vacancies: Vacancy,
		responded: Respond,
		reviews: Review,
	},
};

export const CompanySchema = new Mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	vacancies: {
		type: [VacancySchema],
		required: true,
	},
	responded: {
		type: [RespondSchema],
		default: [],
	},
	reviews: {
		type: [ReviewSchema],
		default: [],
	}
});
