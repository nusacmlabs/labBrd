var express = require('express')
,http = require('http'),
path = require('path');

var app = express();
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/js'));
app.set('view engine', 'html');

app.get('/', function(request, response){
	response.render('index.html');
});

app.listen(3000, function(){
	console.log('Server started');
});