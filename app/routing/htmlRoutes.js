var express = require('express');

var fs = require('fs');

var path = require('path');

// var pulicPath = require('../public/home.html');

var app = express();

var PORT = 3000;

var publicHome = path.join(__dirname, '../public/home.html');

var publicSurvey = path.join(__dirname, '../public/survey.html');

app.get("/", function(req, res) {
	
	fs.readFile(publicHome, "utf8", function (err, data) {
			// if (err) throw err;

		// res.writeHead(200, {"Content-type": "text/html"});
		res.send(data);
	})
})

app.listen(PORT, function() {
	console.log(PORT);
	// console.log(fileName);
	// console.log();

})