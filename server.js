var express = require('express')
	,app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.send('ola mundo.')
});

app.get('/posts', function(req, res) {
	res.send('lista posts.')
});

app.listen(8080, function() {
	console.log('server is running at localhost:8080')
})