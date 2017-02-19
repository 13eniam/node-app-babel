define( function(require){
	console.log('Put Application bootstrap code here');
	let _ = require('underscore');
	let Marionette = require('marionette');

	let App = new Marionette.Application();

	App.addInitializer(function(){
		console.log('Initializing Marionette Application'); 
	});
	return App;
});
