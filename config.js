require("dotenv").config();

class config {
	constructor() {
		this.redis = {
			host: process.env.REDIS_HOST,
			port: process.env.REDIS_PORT,
			password: process.env.REDIS_PASSWORD,
		};
	}
}

module.exports = new config();
