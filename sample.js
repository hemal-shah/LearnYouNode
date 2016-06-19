var http = require("http"),
	url = require('url'),
	port = Number(process.argv[2]);

var server = http.createServer(function(request, response){
	console.log(url.parse(request.url));
});
server.listen(port);
