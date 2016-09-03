var express = require('express');
var app = express.Router();

var newmodel = require('../model/newModel.js');
var retrievemodel = require('../model/retrieveModel.js');

app.post('/new', function (req, res, next) {
	url = req.body.url;
	newmodel.new(url, function(data){
		res.send({code: 1, message: 'Success', data: data});
	})
});

app.get('/', function (req, res, next) {
	res.send('../public/index.html');
});

app.get('*', function (req, res, next) {

	var shorturl = req.path.replace('/', '');

	retrievemodel.retrieve(shorturl, function(data){
		if(data != 0)
			res.redirect(data.url);
		else
			res.redirect('/');
	})
});

module.exports = app;
