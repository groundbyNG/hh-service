const CV = {
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

const Respond = {
	bsonType: 'object',
	required: ['email', 'description'],
	properties: {
		email: {
			bsonType: 'string',
			$regex: /@mongodb\.com$/,
			description: 'must be a string and match the regular expression pattern',
		},
		description: {
			bsonType: 'string',
			description: 'must be a string',
		},
	},
};

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
			bsonType: 'number',
			description: 'must be a number',
		},
	},
};

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
			bsonType: 'number',
			description: 'must be a number',
		},
		salary: {
			bsonType: 'number',
			description: 'must be a number',
		},
	},
};

const Company = {
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

const User = {
	bsonType: 'object',
	required: ['cv', 'name'],
	properties: {
    name: {
			bsonType: 'string',
			description: 'must be a string',
		},
		cv: CV,
		responded: Respond,
	},
};

const companyMock = [
  {
    name: 'Google',
    vacancies: [
      {
				_id: ObjectId(),
        position: 'Middle backend Java developer',
        description: 'temp',
      }
    ],
  },
  {
    name: 'Microsoft',
    vacancies: [
      {
				_id: ObjectId(),
        position: 'Junior frontend Javascript developer',
        description: 'temp',
      }
    ],
  },
  {
    name: 'Meta',
    vacancies: [
      {
				_id: ObjectId(),
        position: 'Middle Go developer',
        description: 'temp',
      },
      {
				_id: ObjectId(),
        position: 'Senior PHP developer',
        description: 'temp',
      }
    ],
  },
];

const userMock = [
  {
    name: 'Jason Statham',
    cv: [
      {
				_id: ObjectId(),
        email: "a@mongodb.com",
        position: 'Middle backend Java developer',
        skills: 'Java, Maven, Spring, REST, HTTP',
        description: 'temp',
        experience: 3,
        salary: 1000,
      }
		],
		responded: [],
  },
  {
    name: 'Pavel Pavlov',
    cv: [
      {
				_id: ObjectId(),
        email: "b@mongodb.com",
        position: 'Junior frontend Javascript developer',
        skills: 'HTML, CSS, JS, Vue',
        description: 'temp',
        experience: 1,
        salary: 200,
      }
		],
		responded: [],
  },
  {
    name: 'Mark Twain',
    cv: [
      {
				_id: ObjectId(),
        email: "c@mongodb.com",
        position: 'Middle Go developer',
        skills: 'Go, Python, Bash, Linux, HTTP',
        description: 'temp',
        experience: 4,
        salary: 1200,
      },
      {
				_id: ObjectId(),
        email: "c@mongodb.com",
        position: 'Senior PHP developer',
        skills: 'PHP, Laravel, Yii',
        description: 'temp',
        experience: 7,
        salary: 2000,
      }
		],
		responded: [],
  },
];

const conn = new Mongo();
const db = conn.getDB('hh');

db.createCollection('company', {
	validator: {
		$jsonSchema: Company,
	},
});

db.createCollection('user', {
	validator: {
		$jsonSchema: User,
	},
});

db.company.insertMany(companyMock);

db.user.insertMany(userMock);
