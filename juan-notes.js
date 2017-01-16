//request is a simplified http client
//install request package first
//
var request = require('request');

//Get
request.get("URL", function (error, response, body) {

//If there's an error:
	if (error) {
		console.log("Error : ", error)
		return;
	}

});

//log something when done with the request

///if statusCode is okay, then parse the JSON object into my code
//data is the entire JSON object
//var data = JSON.parse(body);

//navigates to the address
//goes into data object, first value of results array, then the formatted address key. Gets that value.
//data.results[0].formatted_address

//data.results[0].geometry.bounds.northeast.lat
//data.results[0].geometry.bounds.northeast.lng
