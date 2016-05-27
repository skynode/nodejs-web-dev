var mongoc = require('mongodb').MongoClient;

mongoc.connect('mongodb://localhost:27017/mongotest',
	function(error, db){
		console.log('connected to doc database');
		setTimeout(()=>{
		}, 2000);

		//using the connection object, save the collection 'testing'
		//to a separate variable
		var collec = db.collection('testing');

		//insert a new item

		db.close();
	});