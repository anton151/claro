var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var loginSchema = new Schema({
	username: String,
	password: String
});

var model = mongoose.model('logins', loginSchema);
module.exports = model;