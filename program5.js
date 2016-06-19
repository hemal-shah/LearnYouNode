var fs = require('fs');
var path = require('path');


module.exports = function(dirname, ext, callback){

	var extension = "." + ext;
	var returnList = new Array();

	fs.readdir(dirname, function(err, list){
		var count = 0;

		if(err)
			return callback(err);

		list.forEach(function(file){
			if(path.extname(file) === extension)
				returnList.push(file);
		});
		return callback(null, returnList);
	});
};
