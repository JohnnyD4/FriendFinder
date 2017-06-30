var express = require('express');

// var fs = require('fs');

// var path = require('path');

var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static('../app/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);
require('./app/data/friends.js');
 


app.listen(PORT, function() {
	
	console.log(PORT);


})