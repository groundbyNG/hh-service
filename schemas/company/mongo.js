load("schemas/vacancy/mongo.js");
load("schemas/respond/mongo.js");
load("schemas/review/mongo.js");

const Company = {
	bsonType: 'object',
	required: ['name', 'vacancies'],
	properties: {
		name: {
			bsonType: 'string',
			description: 'must be a string',
		},
		vacancies: {
			bsonType: "array",
			items: Vacancy,
		},
		responded: {
			bsonType: "array",
			items: Respond,
		},
		reviews: {
			bsonType: "array",
			items: Review,
		},
	},
};

module.export = Company;
