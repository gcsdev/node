/*This code is used to compare the execution time between asynchronous and synchronous method in Node.js
  Performing of the asynchronous method*/

var fs = require('fs');
var readingAsync = function (file){
	console.log("Doing Asynchronous Reading!");
	var startTime = new Date().getTime();	
	fs.readFile(file);	
	var endTime = new Date().getTime();
	console.log("Asynchronous Lock: "+(endTime-startTime)+" ms");
};
module.exports = readingAsync;

