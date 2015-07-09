
var fs = require('fs');
fs.readFile('example_log.txt', function (err, logData) {

  if (err) throw err;
    var text = logData.toString();
  	console.log(text);
}); 
fs.readFile('example_log.txt', function (err, logData) {
	var results = {};
  var text = logData.toString();
  var lines = text.split('\n');
  
	lines.forEach(function(line) {
	    var parts = line.split(' ');
	    var letter = parts[1];
	    var count = parseInt(parts[2]);
    
		  if(!results[letter]) {
      		results[letter] = 0;
    	}
      results[letter] += parseInt(count);
  });
  
  console.log(results);
  // { A: 2, B: 14, C: 6 }
});