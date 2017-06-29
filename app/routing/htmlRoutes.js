// var express = require('express');

// var fs = require('fs');

var path = require('path');

// // var pulicPath = require('../public/home.html');

// var app = express();

// var PORT = 3000;

// app.use(express.static('../data'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type: "application/vnd.api+json"}));

module.exports = function(app) {


// console.log(__dirname);
	var publicHome = path.join(__dirname, '../public/home.html');

	var publicSurvey = path.join(__dirname, '../public/survey.html');

	var publicStyle = path.join(__dirname, '../public/style.css');

	var dataQ = path.join(__dirname, '../data/questions.js');

	var publicImage = path.join(__dirname, '../images/cityBack.jpg');
	
	

	app.get("/", function(req, res) {
		// console.log(publicHome);
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

		// res.sendFile(dataQ);

	})

	app.get("/survey", function(req, res) {

		res.sendFile(dataQ);
	})

	// app.post()

	// app.get("/add", function(req, res) {

	// })

	// app.post("/survey", function(req, res) {

	// console.log(req);
	

	// 	// res.end("<h1>" + req.body.username + "</h1>");
	// 	// let name = req.body;
	// 	// res.end(`<!DOCTYPE html><html><head><title>Contact Form</title> </head><body>
 //  //    Your name: ${name} <br/> 
 //  //    Your email:  <br/> 
 //  //    Your Message: <br/>
 //  //   </body></html>`)
	// })
};



// app.listen(PORT, function() {
	
// 	console.log(PORT);


// })