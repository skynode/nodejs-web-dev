//export single function ('index') object
//implement HTTP GET Method (but render a view)
var _sidebar = require('../helpers/sidebar')
module.exports = {
	index: function(req, res){
		//reply client with a index.hbs viewModel form from the views folder
		//res.render('index');
		var viewModel = {
			images: [{
				uniqueId: 1,
				title: 'sample image 1',
				description: '',
				filename: 'sample1.png',
				views: 0,
				likes: 0,
				timestamp: Date.Now
			},{
				uniqueId: 2,
				title: 'sample image 2',
				description: '',
				filename: 'sample2.png',
				views: 0,
				likes: 0,
				timestamp: Date.Now
			},{
				uniqueId: 3,
				title: 'sample image 3',
				description: '',
				filename: 'sample3.png',
				views: 0,
				likes: 0,
				timestamp: Date.Now
			},{
				uniqueId: 4,
				title: 'sample image 4',
				description: '',
				filename: 'sample4.png',
				views: 0,
				likes: 0,
				timestamp: Date.Now
			}]
		};
		
		//res.render('index', viewModel);
		_sidebar(viewModel, function(viewModel){
			res.render('index', viewModel);
		});
	}
};