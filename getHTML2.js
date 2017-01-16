var https = require('https')

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

https.get(requestOptions, function (response) {

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
    return chunkArr;
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

}

getAndPrintHTML();

// This function should use a buffering technique to append each chunk of data 
// to a variable as it is received, and then console.log the data once all of the data has been received.
// Buffering in this context means the technique you've used before 
// (usually in loops or conditionals) of creating an empty variable and adding data to it.