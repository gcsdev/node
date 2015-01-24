/*This code is used to compare the execution time between asynchronous and synchronous method in Node.js
  Performing of the synchronous method*/

var fs = require('fs');
var readingSync = function(file){
	console.log("Doing Synchronous Reading!");
	var startTime = new Date().getTime();
	fs.readFileSync(file);	
	var endTime = new Date().getTime();
	console.log("Synchronous lock: "+(endTime-startTime)+" ms");
};
module.exports=readingSync;
