const Redis = require("ioredis");
const config = require("./config");
const redis = new Redis({
	host: config.redis.host,
	port: config.redis.port,
	password: config.redis.password,
	connectTimeout: 10000,
});
console.log(config);
module.exports = redis;

/*
`redis://:SbLlE7vXEJhyT9pAknufARfGb4HZPPVd@redis-13146.c212.ap-south-1-1.ec2.cloud.redislabs.com:13146`

*/
