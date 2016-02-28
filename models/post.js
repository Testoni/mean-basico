var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postsSchema = new Schema({
	title: String,
	content: String,
	tags: []
});

var Post = mongoose.model('posts', postsSchema);

module.exports = Post;