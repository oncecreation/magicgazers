const express = require("express");
const path = require("path");
const axios = require("axios");
const redis = require("./redis-client");

const app = express();

app.use(express.json());

app.post("/data", async (req, res) => {
	const repo = req.body.repo;

	let value = await redis.get(repo);

	if (value) {
		console.log("redis");
		res.json({
			stars: value,
		});

		const response = await axios({
			method: "GET",
			url: `https://api.github.com/repos/${repo}`,
		});
		if (response.data.stargazers_count !== undefined) {
			await redis.setex(repo, 60, response.data.stargazers_count);
		}

		return;
	}

	const response = await axios({
		method: "GET",
		url: `https://api.github.com/repos/${repo}`,
	});
	if (response.data.stargazers_count !== undefined) {
		await redis.setex(repo, 60, response.data.stargazers_count);
	}

	res.json({
		stars: response.data.stargazers_count,
	});
});

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(process.env.PUBLIC_PORT, () => {
	console.log(`Server ready ${process.env.PUBLIC_PORT}`);
});
