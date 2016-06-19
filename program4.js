var fs = require('fs');
fs.readFile(process.argv[2], "utf8", function(err, data){
	if(err === null){
		var line_count = data.split('\n').length - 1;
		console.log(line_count);
	}
});
