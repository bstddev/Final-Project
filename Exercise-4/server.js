//  Ini localserver Pake nodeJS


var http = require('http');
var fs = require('fs');

var x = fs.readFileSync('Contact.html', 'utf8');

var server = http.createServer(function(req,res){
    console.log('Request : ' +req.url);
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(x);
});


server.listen(2019);
console.log('Server Aktif di Port 2019')