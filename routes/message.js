var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Messages = require('../models/Messages.js');

/* GET ALL MESSAGES */
router.get('/', function(req, res, next) {
    Messages.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE MESSAGES BY ID */
router.get('/:id', function(req, res, next) {
    Messages.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE MESSAGES */
router.post('/', function(req, res, next) {
    Messages.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE MESSAGES */
router.put('/:id', function(req, res, next) {
    Messages.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE MESSAGES */
router.delete('/:id', function(req, res, next) {
    Messages.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;