load("schemas/cv/mongo.js");

const User = {
	bsonType: 'object',
	required: ['cv', 'name'],
	properties: {
    name: {
			bsonType: 'string',
			description: 'must be a string',
		},
		cv: {
			bsonType: "array",
			items: CV,
		},
		responded: {
			bsonType: "array",
			items: Respond,
		},
	},
};

module.export = User;
