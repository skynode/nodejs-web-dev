/*************************************server configuration settings***************************************/

//include reference modules
var _path = require('path'),
	_routes = require('./routes'),
	_express = require('express'),
	//enable packing of any form fields submitted via html in thin client
	_bodyParser = require('body-parser'),
	//enable cookie transmission functionality
	_cookieParser = require('cookie-parser'),
	//handle all middleware-process errors
	_errorHandler = require('errorhandler'),
	//templating engine for the view component of MVC
	_expressHandlebars = require('express-handlebars'),
	//for older non-RESTful browsers, use special hidden input field
	_methodOverride = require('method-override'),
	//logging module
	_morgan = require('morgan'),
	//handle date and timestamp information
	_moment = require('moment'),
	//handles multipart html form submissions
	_multer = require('multer');
	//handles filesystem interactions
	//fs = require('fs');


//'configure.js' module exports...
module.exports = function(appX){
	appX.use(_morgan('dev'));

	//deprecated...include 'keepExtensions: true'
	/*appX.use(bodyParser({
		uploadDir:path.join(__dirname, 'public/upload/', keepExtensions: true)
	}));*/

	/*
	appX.use(bodyParser.urlencoded({'extended':true}));
	appX.use(bodyParser.json());
	*/
		
	appX.use(_methodOverride());
	appX.use(_cookieParser('crypto-secret-here'));

	//multipart form submission support
	appX.use(_multer({dest: _path.join(__dirname + '/public/upload/temp')}).single('file'));
    
    //express feature; we're using a router with the server
	_routes(appX);

	/*rendering engine for static content files to the client
	//from a predefined static resource directory.
	important for server leanness.
	Important that static middleware is defined after the app.router()
	so that static assets don't assume higher priority over a 
	matching route defined somewhere or override app-level routing defns
	*/
	appX.use('/public/', _express.static(_path.join(__dirname, '../public')));

	//since it's dev grade, enable debugging mode
	//Comparison based on the Strict Equality Algorithm
	if('development' === appX.get('env')){
		//appX.use(errorhandler());
	}
	//register handlebars as defualt view rendering engine
	//create expressHandlebars object including arbitrary key:value pairs
	//.hbs parameter specifies the file extension the server will bind to this rendering engine
	appX.engine('.hbs', _expressHandlebars.create({
		defaultLayout: 'main',
		layoutsDir: appX.get('views') + '/layouts', //this could've been a single String value, not an array
		partialsDir: [appX.get('views') + '/partials'], //you could have more than one partialsDir
		extname: '.hbs', //since we're using a custom file extension, not the default '.handlebars'
		helpers: {
			timeago: function(timestamp){
				return _moment(timestamp).startOf('minute').fromNow();
			}
		}
	}).engine);
	//set appX rendering-engine properties above to the expressjs object
	appX.set('view engine', '.hbs');

	//the whole essence of 'module.exports'
	return appX;

};
