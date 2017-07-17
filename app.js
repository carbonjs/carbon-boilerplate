var carbon = require("carbon-framework");

var config = require("./config/config");

carbon.inits = {
	initFramework: function() {
		global.Framework = carbon;

		Framework.express.enable('trust proxy');

		Framework.express.disable("x-powered-by");
	},
};

carbon.hooks = {
	errors: {
		notFound: function(req, res, next) {
			res.status(404).send({
				error: "notFound"
			});
		},
		serverError: function(err, req, res, next) {
			res.status(500).send(err);
		}
	}
};

carbon.run({
	//baseDomain: config.domains.base,
	express: {
		"view engine": "jade"
	},
	overrides: {
		absoluteRequire: true
	},
	server: {
		hostname: config.server.hostname,
		port: config.server.port
	}
}, function() {
	console.log("Application is running on '" + carbon.server.address().address + ":" + carbon.server.address().port + "'");
});

module.exports = exports = carbon;
