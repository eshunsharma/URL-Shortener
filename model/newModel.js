var mongoose = require('mongoose');
var lib = require('../lib/common.js');
var connect = require('../db/mongo.js');

module.exports = {
	new : function(long_url, callback) {

		var shorturl = lib.newurl();

		var obj = { url: long_url, short_url: shorturl };

		connect.create(obj, function (err) {
		  	if (err) 
		  		return console.error(err);
		  	else
		  		callback(shorturl);
		});
	}
	
}