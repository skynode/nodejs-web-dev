/*  ------High-level abstraction module for appX sidebar
	this module will be responsible for calling multiple
	other modules to populate the viewModel for each 
	section of the sidebar. The sidebar module's function
	will accept the original viewModel as a parameter.
	The current module will also define the application-
	specific properties of appX sidebars-----------------
*/
//sidebar module pre-requisites
var _stats = require('./stats'), 
	_images = require('./images'), 
	_comments = require('./comments');

module.exports = function(viewModel, callback){
	//sidebar property for each section
	//callback will handle the rendering of the html page
	viewModel.sidebar = {
		stats: _stats(),
		images: _images.popular(),
		comment: _comments.newest()
	};
	callback(viewModel);
}


