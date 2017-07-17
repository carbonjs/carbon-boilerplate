var app = require("carbon-framework");

module.exports = function() {
	return {
		indexAction: {
			init: function(req, res) {
				res.helper("headTitle").setTitle("Welcome to CarbonJS Framework");
				res.helper("headMeta").appendMeta("description", "An awesome application running on CarbonJS Framework");
			},
			get: function(req, res) {
                res.render("scripts/index/index");
			}
        }
    };
};
