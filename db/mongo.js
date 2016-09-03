var mongoose = require('mongoose');

var UrlSchema = new mongoose.Schema({
  	url: String,
 	short_url: String
});

module.exports = mongoose.model('url', UrlSchema);
