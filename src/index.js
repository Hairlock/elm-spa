'use strict';


require('basscss/css/basscss.css');
require('font-awesome/css/font-awesome.css');


// Reqire index.html so it gets copied to dist
require('./index.html');


const App = require('./Main.elm');
const mountNode = document.getElementById('main');

// Third value are initial values for incoming ports
const app = App.embed(App.Main, mountNode);