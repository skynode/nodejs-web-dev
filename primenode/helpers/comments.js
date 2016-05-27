/*  ----return a collection of the newest comments posted to the site.
	Idea of particular interest here is that each comment also has an
	image attached to it so that the actual image is displayed as a 
	thumbnail while displaying the list of comments for context.
*/

module.exports = {
	newest: function(){
		var comments = [
			{
				image_id: 1,
				email: 'test@testrunner.com',
				name: 'test runner',
				gravatar: 'http://lorempixel.com/75/75/animals/1',
				comment: 'great stuff',
				timestamp: Date.now(),
				image: {
					uniqueID: 1,
					title: 'sample1.jpg',
					description: '',
					filename: 'sample1.jpg',
					views: 0,
					likes: 0,
					timestamp: Date.now()
				}
			},{
				image_id: 1,
				email: 'test@testrunner.com',
				name: 'test runner',
				gravatar: 'http://lorempixel.com/75/75/animals/1',
				comment: 'great stuff again',
				timestamp: Date.now(),
				image: {
					uniqueID: 1,
					title: 'sample1.jpg',
					description: '',
					filename: 'sample1.jpg',
					views: 0,
					likes: 0,
					timestamp: Date.now()
				}
			}
		];
		return comments;
	}
}