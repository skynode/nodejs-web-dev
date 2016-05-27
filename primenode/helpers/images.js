/*this helper module will return various 
collections of images based on popularity
*/

module.exports = {
	popular: function(){
		var images = [
			{
				uniqueID: 1,
				title: 'sample1.jpg',
				description: '',
				filename: 'sample1.jpg',
				views: 0,
				likes: 0,
				timestamp: Date.now()
			},{
				uniqueID: 2,
				title: 'sample2.jpg',
				description: '',
				filename: 'sample2.jpg',
				views: 0,
				likes: 0,
				timestamp: Date.now()
			},{
				uniqueID: 3,
				title: 'sample3.jpg',
				description: '',
				filename: 'sample3.jpg',
				views: 0,
				likes: 0,
				timestamp: Date.now()
			},{
				uniqueID: 4,
				title: 'sample4.jpg',
				description: '',
				filename: 'sample4.jpg',
				views: 0,
				likes: 0,
				timestamp: Date.now()
			}

		];
		
		return images;
	}
};