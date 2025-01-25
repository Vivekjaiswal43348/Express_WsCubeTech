let express = require("express");

let app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send({ status: 200, msg: "This is default route!" });
});

app.get("/detail", (req, res) => {
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

app.listen(8081);
