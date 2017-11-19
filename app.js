// This is the main file of our chat app. It initializes a new 
// express.js instance, requires the config and routes files
// and listens on a port. Start the application by running
// 'node app.js' in your terminal

var express = require('express'),
	app = express();
var translator = require('./translator'),
	api = new translator();

// This is needed if the app is run on heroku:

var port = process.env.PORT || 8080;

// Initialize a new socket.io object. It is bound to 
// the express app, which allows them to coexist.

var io = require('socket.io').listen(app.listen(port));

// Require the configuration routes and the chat files, and pass
// the app and io as arguments to the returned functions.
require('./config')(app);
require('./routes')(app);
require('./chat')(io, api);

console.log('Translator is running on http://localhost:' + port);