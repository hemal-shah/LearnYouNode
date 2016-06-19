var http = require('http') ,
	map = require('through2-map'),
	port = Number(process.argv[2]);

var server = http.createServer(function(request, response){

	if(request.method !== 'POST'){
		return response.end('Send a POST Request!');
	}

	request.pipe(map(function(strings){
		return strings.toString().toUpperCase();
	})).pipe(response);
});

server.listen(port);
