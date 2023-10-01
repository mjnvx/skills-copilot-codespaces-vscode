// Create web server

var express = require('express');
var router = express.Router();
var Comment = require('../models/Comment');
var jwt = require('jsonwebtoken');
var config = require('../config');
var mongoose = require('mongoose');

// Get all comments
router.get('/', function(req, res) {
	Comment.find({}, function(err, comments) {
		if (err) {
			console.log(err);
			res.status(400).send(err);
		} else {
			res.status(200).json(comments);
		}
	});
});

// Get single comment
router.get('/:id', function(req, res) {
	var id = req.params.id;
	Comment.findById(id, function(err, comment) {
		if (err) {
			console.log(err);
			res.status(400).send(err);
		} else {
			res.status(200).json(comment);
		}
	});
});

// Create comment
router.post('/', function(req, res) {
	var comment = new Comment(req.body);
	comment.save(function(err, comment) {
		if (err) {
			console.log(err);
			res.status(400).send(err);
		} else {
			res.status(201).json(comment);
		}
	});
});

// Delete comment
router.delete('/:id', function(req, res) {
	var id = req.params.id;
	Comment.findByIdAndRemove(id, function(err, comment) {
		if (err) {
			console.log(err);
			res.status(400).send(err);
		} else {
			res.status(200).json(comment);
		}
	});
});

module.exports = router;