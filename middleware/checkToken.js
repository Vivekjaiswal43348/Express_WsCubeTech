const TOKEN = "12345";
const checkToken = (req, res, next) => {
	if (!req.query.token) {
		res.send({
			status: 0,
			msg: "Token is missing",
		});
	}
	if (req.query.token !== TOKEN) {
		res.send({
			status: 0,
			msg: "Token not matched",
		});
	}
	next();
};

module.exports = { checkToken };
