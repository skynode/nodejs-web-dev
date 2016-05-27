//custom middleware
app.use(function(error, request, response, next){
	//do stuff here..
	//alter req, alter res, throw error, etc
	return next();
});