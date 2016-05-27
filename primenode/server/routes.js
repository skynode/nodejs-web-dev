/***************************************middleware routing lines******************************************/

//instantiate the Router() function object from expressjs
var express = require('express'),
	router = express.Router(),

	//hook up the controllers
	home = require('../controllers/home'),
	image = require('../controllers/image');

//export the needful so other modules can consume
module.exports = function(appX){
	/* add HTTP Methods to router object...
	these lines define the routes through the middleware
	GET and POST HTTP Methods to /[route]/ will call
	the corresponding function down here
	*/
    
    //string values of the routes and their corresponding callback functions 
    //(which could have been in-line functions)
    //relevant functions contained in image.js
	router.get('/', home.index);
	router.get('/images/:image_id', image.index);
	router.post('/images', image.create);
	router.post('images/:image_id/like', image.like);
	router.post('images/:image_id/comment', image.comment);
	
	//bind router features to appX	
	appX.use(router);     
};