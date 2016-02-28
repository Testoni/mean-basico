var express = require('express')
	,mongoose = require('mongoose')
	,app = express();

var Post = require('./models/post');
var User = require('./models/user')

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost:27017/mean');

app.get('/', function(req, res) {
	res.send('ola mundo.');
});

app.get('/posts', function(req, res) {
	Post.find(function(err, posts) {
		if (err) res.send(err);
		res.send(posts);
	});
});

app.get('/posts/:id', function(req, res) {
	Post.find({_id: req.params.id}, function(err, post) {
		if (err) res.send(err);
		res.send(post);
	});
});

app.post('/posts/', function(req, res){
	var post = new Post(req.body);
	post.save(function(err, post) {
	  if (err) res.send(err);
	  res.json(post);
	});
});

app.get('/users', function(req, res) {
	User.find(function(err, users) {
		if (err) res.send(err);
		res.send(users);
	});
});

app.listen(8080, function() {
	console.log('server is running at localhost:8080')
})