var net = require("net");

function zeroFill(i){
	return ((i < 10) ? '0' : '') + i;
}

var server = net.createServer(function(socket){
	var date = new Date();
	var data = date.getFullYear() + "-" + zeroFill(date.getMonth() + 1) + "-"
			+ zeroFill(date.getDate())
			+ " " + zeroFill(date.getHours()) + ":"
			+ zeroFill(date.getMinutes()) + "\n";
	socket.end(data);
});
server.listen(Number(process.argv[2]));
