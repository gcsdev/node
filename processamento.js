
var http= require('http');
var fs = require('fs');
var readingAsync = require('./r_async');
var readingSync = require('./r_sync');
var file = "./node.js";
var stream = fs.createWriteStream(file);
var download = "http://nodejs.org/dist/latest/node.exe";
http.get(download,function(res){
	console.log("Downloading of the Node.js!");
	res.on('data',function(data){
		stream.write(data);
	});
	res.on('end',function(){
		stream.end();
		console.log("Download executed!");
		readingAsync(file);
		readingSync(file);
	});
});
