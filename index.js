let express = require("express");
const { checkToken } = require("./middleware/checkToken");
require('dotenv').config();

let app = express();
/* It parses the JSON payload and attaches the 
 resulting object to the req.body property */
app.use(express.json());
const PASSWORD = process.env.PASSWORD;

// custom middleware-2: check password
app.use((req, res, next) => {
	if (!req.query.pwd) {
		res.send({
			status: 0,
			msg: "Password is not there",
		});
	}

	if (req.query.pwd !== PASSWORD) {
		res.send({
			status: 0,
			msg: "Password not matched",
		});
	}
	next();
});

app.get("/", (req, res) => {
	res.send({ status: 200, msg: "This is default route!" });
});

app.get("/detail", checkToken, (req, res) => {
	let jsonData = {
		name: "Vinod",
		age: 30,
		msg: "This is detail page route!",
	};
	// JSON.stringify(jsonData) is not needed here, bcz we are using express framework
	res.send({ status: 200, jsonData });
});

app.get("/user/:id", (req, res) => {
	// Get Details by ID API
	res.send({
		status: 1,
		dynamicID: req.params.id,
	});
});

app.post("/login", (req, res) => {
	// Get details by POST JSOn payload or in Query Params
	// res.send({
	// 	status: 1,
	// 	msg: "Login POST API call",
	// 	bodyData: req.body,
	// 	queryData: req.query,
	// });

	/** Another way of Sending response to FE */
	res.status(200).json({
		status: 1,
		msg: "Login POST API call..",
		bodyData: req.body,
		queryData: req.query,
	});
});

app.listen(process.env.PORT || 5000);
