var http = require('http'),
	URL = require('url'),
 	port = Number(process.argv[2]);

var server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'application/json'});
	var url = URL.parse(request.url, true);
	var date = new Date(url.query.iso);
	var output_date = new Object();
	if(url.pathname.endsWith('unixtime')){
		output_date["unixtime"] = date.getTime();
	} else if(url.pathname.endsWith('parsetime')){
		output_date["hour"] = date.getHours();
		output_date["minute"] = date.getMinutes();
		output_date["second"] = date.getSeconds();
	}
	response.end(JSON.stringify(output_date));
});

server.listen(port);
