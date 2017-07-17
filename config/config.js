var env = process.env.NODE_ENV == "production" ? "production" : "development";

var config = {
	development: {
		server: {
			hostname: "localhost",
			port: 1122
		}
	},
	production: {
		server: {
			hostname: "127.0.0.1",
			port: 3344
		}
	}
};

module.exports = config[env];
