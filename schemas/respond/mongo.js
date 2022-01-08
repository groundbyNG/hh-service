const Respond = {
	bsonType: 'object',
	required: ['email', 'description'],
	properties: {
		email: {
			bsonType: 'string',
			pattern: '@mongodb\.com$',
			description: 'must be a string and match the regular expression pattern',
		},
		description: {
			bsonType: 'string',
			description: 'must be a string',
		},
	},
};

module.export = Respond;
