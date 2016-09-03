var mongoose = require('mongoose');
var connect = require('../db/mongo.js');

module.exports = {
	retrieve : function(shorturl, callback) {
		
		connect.findOne({ 'short_url': shorturl }, function(err, data){
			if(err || data == null)
				callback(0);
			else {
				data.remove();
				callback(data);
			}
		});

	}
	
}

