var all = function(app) {


	var users = [
		[
			{
				"name": "Mario Iovanna",
				"imgId": "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/13765933_1404824366199324_1420551039999402706_o.jpg?oh=8c9bf07964ef492fb76180087a981f49&oe=5A0DE276"
			},

			[
				"4 often",
				"4 often",
				"4 often",
				"4 often",
				"4 often",
				"4 often",
				"4 often",
				"4 often",
			]
		],	

		[
			{
				"name": "John Davis",
				"imgId": "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/10984026_1091095590904890_2071409968664339199_n.jpg?oh=87fefbe1c6f8b171314bb631fe6df2d0&oe=59CB134A"
			},

			[
				"3 not sure",
				"4 often",
				"4 often",
				"4 often",
				"4 often",
				"5 very often",
				"5 very often",
				"4 often",
			]
		],

		[
			{
				"name": "Tim Hayes",
				"imgId": "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/19025282_1876909662634357_147896395723870292_o.jpg?oh=dedeee6a6280c694262634d11092357d&oe=59CB74EF"
			},

			[
				"3 not sure",
				"4 often",
				"4 often",
				"4 often",
				"4 often",
				"5 very often",
				"5 very often",
				"4 often",
			]
		],

		[
			{
				"name": "Rhegi Patricio",
				"imgId": "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/18155878_10106503335989392_1835667077267249459_o.jpg?oh=f04f4c80afe20ef21d77ad2dd17b5b72&oe=59C7FB5A"
			},

			[
				"3 not sure",
				"4 often",
				"5 very often",
				"4 often",
				"2 not often",
				"5 very often",
				"5 very often",
				"4 often",
			]
		]
	];
	console.log(users[0]);

	app.post("/api/new", function(req, res) {

		var newUser = req.body;

		users.push(newUser);

		res.json(newUser);

		console.log("please" + newUser);
	})
}
module.exports = all;