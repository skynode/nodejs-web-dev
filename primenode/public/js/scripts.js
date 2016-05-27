/*some jQuery scripting to handle differential page-components loading*/

$(function(){

	//execute the hide function on html div that has a 'post-comment' Id
	$('#post-comment').hide();
	//setup event handler for html button with a 'btn-comment' Id
	//the function here prevents the default button behavior and calls
	//the show() jQuery function, which reveals the post-comment div that
	//was previously hidden
	$('#btn-comment').on('click', function(event){
		//without this, the browser will send the user to the href for the 
		//click-button link, regardless of your custom code 
		event.preventDefault();
		$('#post-comment').show();
	});

	$('#btn-like').on('click', function(event){
		event.preventDefault();
		//retrieve data-id attribute from the like button which was assigned
		//via the image.hbs html template code and viewModel
		var imgId = $(this).data('id');
		
		//perform jQuery AJAX post to the /images/:image_id/like route
		/*Callback function should change text of html element based on
		like data returned from ajax call - updated total count of likes*/
		$.post('/images' + imgId + '/like').done(function(data){
			$.('.likes-count').text(data.likes);
		});
	});
});

/*same as...
callback will wait until page has completely loaded before executing the function
$(document).ready(function(){
	//tbd
});
*/