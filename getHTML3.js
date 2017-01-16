var https = require('https')

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML(options) {

  https.get(options, function (response) {

  // set encoding of received data to UTF-8
    response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
  	var chunkArr = [];
  		for (i = 0; i < data.length; i++){
  			chunkArr.push(i)
  		}
    console.log('Chunk Received. Length:', data.length);
    console.log("Body : " + data + "\n");
    // return chunkArr;
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
  });

});
}

getAndPrintHTML(options);

// accepts a paramater, options, which is an object that contains values for the host and path, exactly like requestOptions. 
// Reuse whatever code you need from part 2 - we're still getting and printing the HTML.