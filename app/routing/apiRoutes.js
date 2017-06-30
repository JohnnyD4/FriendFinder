// var path = require('path');

var friends = require("../data/friends");
// console.log(JSON.stringify(friends));
var users = [];
module.exports = function(app) {


	app.get("/api", function(req, res) {

		// var chosen = req.params.users;

		// if(chosen) {

		// 	console.log(chosen);

		// 	for (var i = 0; i < users.length; i++) {

		// 		if(chosen === users[i].name) {

		// 			return res.json(users[i]);
		// 		}
		// 	}

		// 	return res.json(false);
		// }
		users.unshift(friends);
		// res.json(friends);
		res.json(users);

	})


	app.post("/api", function(req, res) {

		var newUser = req.body;

		users.push(newUser);

		res.json(newUser);

		console.log(newUser);
	})

}