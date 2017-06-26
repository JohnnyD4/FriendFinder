var express = require('express');

var fs = require('fs');

var path = require('path');

// var pulicPath = require('../public/home.html');

var app = express();

var PORT = 3000;

var publicHome = path.join(__dirname, '../public/home.html');

var publicSurvey = path.join(__dirname, '../public/survey.html');

var publicStyle = path.join(__dirname, '../public/style.css');

app.get("/", function(req, res) {
	
	fs.readFile(publicHome, "utf8", function (err, data) {
			// if (err) throw err;

		res.writeHead(200, {"Content-type": "text/html"});
		res.end(data);
	})
})

app.get("/style.css", function(req, res) {
	
	fs.readFile(publicStyle, "utf8", function (err, data) {
			// if (err) throw err;

		res.writeHead(200, {"Content-type": "text/css"});
		res.end(data);
	})
})

app.listen(PORT, function() {
	console.log(PORT);
	// console.log(fileName);
	console.log(publicHome);

})