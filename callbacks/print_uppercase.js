var https = require("https");

var getHTML = require('./http-functions.js');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML(html) {
  console.log(html.toUpperCase());
}

getHTML(options, printHTML)