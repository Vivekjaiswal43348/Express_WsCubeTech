const checkToken = (req, res, next) => {
	if (!req.query.token) {
		// res.send is not like a return statement, it just sends the response
		// and then continues to the next middleware or route handler
		return res.send({
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

const checkAppVersion = (req, res, next) => {
	if (!req.query.version) {
		// res.send is not like a return statement, it just sends the response
		// and then continues to the next middleware or route handler
		return res.send({
			status: 0,
			msg: "version is missing",
		});
	}
	if (req.query.version !== process.env.VERSION) {
		res.send({
			status: 0,
			msg: "version not matched",
		});
	}
	next();
};

module.exports = { checkToken, checkAppVersion };
