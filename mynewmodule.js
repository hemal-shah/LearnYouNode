var fs = require('fs');
var exports = module.exports = {};

/**
* It's always good to have a callback in the form (err, data);
*/
exports.first = function(callback){
	return callback(null, 2);
};

exports.second = function(dir, callback){
	fs.readdir(dir, function(err, list){
		if(err)
			return callback(err);
		else 
			return callback(null, list);

	});
};
