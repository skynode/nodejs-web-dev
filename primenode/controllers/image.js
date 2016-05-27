/**************************************************
expose consumable functions to routes.js 
and any other functions that may require
image manipulation/interaction services
***************************************************/


//support for filesystem interactions
var _fs = require('fs'), _path = require('path'), _sidebar = require('../helpers/sidebar'); 

module.exports = {
	index: function(req, res){
		//the image: index GET controller
		//res.render('image'); // +
			//req.params.image_id);

		/*instead of a simple string message, we send out a more complex object here.
		The comments property is an array of comments
		*/
		var viewModel = {
			image: {
				uniqueId: 1,
				title: 'sample image 1',
				description: 'this is a sample',
				filename: 'sample1.jpg',
				views: 0,
				likes: 0,
				timestamp: Date.now()
			},
			comments: [
				{
					image_id: 1,
					email: 'test@primenode.com',
					name: 'test runner',
					gravatar: 'http://lorempixel.com/75/75/animals/1',
					comment: 'this is a test comment',
					timestamp: Date.now()
				},{
					image_id: 1,
					email: 'test@primenode.com',
					name: 'test runner',
					gravatar: 'http://lorempixel.com/75/75/animals/2',
					comment: 'follow up comment',
					timestamp: Date.now()
				}
			]
		};
		//transmit viewModel to this image's handlebars template
		//res.render('image', viewModel);

		/*
		the anonymous function here ensures that while the sidebar
		is still working on populating the viewModel,
		the callback can go ahead and render the page
		instead of waiting so long for the user to see anything
		*/
		_sidebar(viewModel, function(viewModel){
			res.render('image', viewModel);
		});
	},	
	//the /image:create POST controller
	create: function(req, res){
		//upload and save image function
		//we are going to call saveImage() repeatedly
		//to ensure the uniqueId generated is in fact unique
		//and doesn't already exist in the db		
		var saveImage = function(){
			var population = 'abcdefghijklmnopqrstuvwxyz0123456789', imgUrl = '';
			for(var i=0; i<8; i++){
				//loop thru population, appending a character to imgUrl on each cycle
				imgUrl += population.charAt(Math.floor(Math.random() * population.length));
			}
			var tempPath = req.file.path,
				ext = _path.extname(req.file.originalname).toLowerCase(),
				permPath = _path.resolve('./public/upload/' + imgUrl + ext);
                
			//validate prospective files to be uploaded 
			if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
				_fs.rename(tempPath, permPath, function(error){
					if(error) throw error;
					res.redirect('/images/' + imgUrl);
				});
			}
			else{
				_fs.unlink(tempPath, function(){
					if(error)
						throw error;
					res.json(500, {error: 'only image files are allowed'}); //deprecated
				});
			}		
		}; 
		//Immediately invoke saveImage to guarantee uniqueID for all database commits
		saveImage();
	},

	like: function(req, res){
		res.json({likes: 1});
	},
	comment: function(req, res){
		res.send('the image:comment POST controller');
	}
};