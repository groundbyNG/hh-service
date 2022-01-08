const Review = {
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
			bsonType: 'int',
			description: 'must be a number',
		},
	},
};

module.export = Review;
