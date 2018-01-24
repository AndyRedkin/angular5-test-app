var mongoose = require('mongoose');

var MessagesSchema = new mongoose.Schema({
    title: String,
    author: String,
    text: String,
    publisher: String,
    updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Messages', MessagesSchema);