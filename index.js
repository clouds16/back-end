const express = require("express");
require("./mongoose");

const User = require("./models/users");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/?", (req, res) => {
	res.send(req.body);
});

app.post("/users", async (req, res) => {
	//using async await

	const user = new User(req.body);

	try {
		await user.save();
		res.status(201).send(user);
	} catch (e) {
		res.status(400).send(e);
	}

	// using promises
	// user
	// 	.save()
	// 	.then(() => {
	// 		console.log("updated");
	// 	})
	// 	.catch((err) => {
	// 		res.send(err);
	// 	});
});

app.post("/contact", async (req, res) => {
	const user = new User(req.body);

	try {
		await user.save();
		res.status(201).send(user);
	} catch (e) {
		res.status(400).send(e);
	}
});

app.listen(port, () => {
	console.log("Server up on port - lets see if it works" + port);
});
