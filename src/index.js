'use strict';


require('basscss/css/basscss.css');
require('font-awesome/css/font-awesome.css');


// Reqire index.html so it gets copied to dist
require('./index.html');


const App = require('./Main.elm');
const mountNode = document.getElementById('main');

// Third value are initial values for incoming ports
const app = App.embed(App.Main, mountNode, { getDeleteConfirmation: 0 });

app.ports.askDeleteConfirmation.subscribe(args => {
	console.log('askDeleteConfirmation', args);
	const id = args[0];
	const message = args[1];
	const response = window.confirm(message);
	if (response) {
		app.ports.getDeleteConfirmation.send(id);
	}
});