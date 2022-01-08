load('schemas/company/mongo.js');
load('schemas/user/mongo.js');
load('mocks/company.js');
load('mocks/user.js');

// add shards to the cluster
sh.addShard("shardrs/localhost:27001");
sh.addShard("shardrs/localhost:27002");

const conn = new Mongo();
const db = db.getSiblingDB('hh');

db.createCollection('company', {
	validator: {
		$jsonSchema: Company,
	},
});

db.company.createIndex({ "_id": "hashed" })
db.company.insertMany(companyMock);

db.createCollection('user', {
	validator: {
		$jsonSchema: User,
	},
});

db.user.insertMany(userMock);

// enable sharding on database
sh.enableSharding("hh");
// shard collection
sh.shardCollection("hh.company", { "_id": "hashed" });