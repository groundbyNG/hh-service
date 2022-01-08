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
        experience: NumberInt(3),
        salary: NumberInt(1000),
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
        experience: NumberInt(1),
        salary: NumberInt(200),
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
        experience: NumberInt(4),
        salary: NumberInt(1200),
      },
      {
				_id: ObjectId(),
        email: "c@mongodb.com",
        position: 'Senior PHP developer',
        skills: 'PHP, Laravel, Yii',
        description: 'temp',
        experience: NumberInt(7),
        salary: NumberInt(2000),
      }
		],
		responded: [],
  },
];

module.expoprt = userMock;
