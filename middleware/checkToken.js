const checkToken = (req, res, next) => {
	if (!req.query.token) {
		res.send({
			status: 0,
			msg: "Token is missing",
		});
	}
	if (req.query.token !== process.env.TOKEN) {
		res.send({
			status: 0,
			msg: "Token not matched",
		});
	}
	next();
};

module.exports = { checkToken };
