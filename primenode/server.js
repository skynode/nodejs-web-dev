/********************************************appX Server Implementation*************************************/

var express = require('express'),
config = require('./server/configure'),

//appX becomes expressjs object here and can now call its methods
appX = express();

appX.set('port', process.env.port || 3737);
appX.set('views', __dirname + '/views'); 

//imbue appX with exported configure.js properties
appX = config(appX);

//respond with 'Hello Client' when a GET request is made to server root, '/'
//routes.js file makes this call redundant
//appX.get('/', function(req, res){ res.send('Hello Client');});

//listen on chosen port
appX.listen(appX.get('port'), function(){
	console.log('Appx server now running at http://localhost:' + appX.get('port'));
});


