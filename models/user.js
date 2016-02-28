var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
	name: String,
	user: String
});

var User = mongoose.model('users', usersSchema);

module.exports = User;