var express = require('express');

var fs = require('fs');

var path = require('path');

// var pulicPath = require('../public/home.html');

var app = express();

var PORT = 3000;

app.use(express.static('../data'));

// var htmlRouting = function() {



	var publicHome = path.join(__dirname, '../public/home.html');

	var publicSurvey = path.join(__dirname, '../public/survey.html');

	var publicStyle = path.join(__dirname, '../public/style.css');

	var dataQ = path.join(__dirname, '../data/questions.js');

	// var publicImage = path.join(__dirname, '../images/cityBack.jpg');
	
	

	app.get("/", function(req, res) {
		
		res.sendFile(publicHome);
		// res.sendFile(publicStyle);
		
	})

	// app.get("/images/cityBack.jpg", function(req, res) {

	// 	fs.readFile(publicImage, "utf8", function(err, data) {

	// 		res.writeHead(200, {"Content-type": "image/jpeg"});
	// 		res.end(data);
	// 	})
	// })

	app.get("/style.css", function(req, res) {
		
		res.sendFile(publicStyle);
				
	})

	app.get("/survey", function(req, res) {

		res.sendFile(publicSurvey);

	})

	app.get("/survey", function(req, res) {

		res.sendFile(dataQ);
	})

// };

// module.exports = htmlRouting;

app.listen(PORT, function() {
	
	console.log(PORT);


})