
var https = require("https");

var getHTML = require('./http-functions.js');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function reverse(html) {
	var reversed = '';
	for (i = html.length - 1; i >= 0; i--) {
		reversed += html[i];
	}
	console.log(reversed)
}


getHTML(options, reverse)