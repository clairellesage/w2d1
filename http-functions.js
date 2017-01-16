var https = require("https");

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

module.exports = function getHTML(options, callback) {

	https.get(options, function(response){
		response.setEncoding('utf-8');
	
	response.on('data', function(data){
		callback(data)
    });

  response.on('end', function() {
    console.log("ended GET request");
  });
  });

	function printHTML(html) {
  		console.log(html);
	}
}


