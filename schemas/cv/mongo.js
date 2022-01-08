const CV = {
	bsonType: 'object',
	required: ['email', 'position', 'skills', 'experience', 'salary', 'description'],
	description: 'required',
	properties: {
		email: {
			bsonType: 'string',
			pattern: '@mongodb\.com$',
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
			bsonType: 'int',
			description: 'must be a number',
		},
		salary: {
			bsonType: 'int',
			description: 'must be a number',
		},
	},
};

module.export = CV;
