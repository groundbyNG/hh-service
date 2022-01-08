const Vacancy = {
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
			bsonType: 'int',
			description: 'must be a number',
		},
		salary: {
			bsonType: 'int',
			description: 'must be a number',
		},
	},
};

module.export = Vacancy;
