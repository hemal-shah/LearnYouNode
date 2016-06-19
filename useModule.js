var mm = require('./mynewmodule');
mm.first(function(err, data){
	console.log(data);
});

mm.second("ajkd", function(err, data){
	if(err)
		console.error(err);
	else {
		console.log(data);
	}
});
