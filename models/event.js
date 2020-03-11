var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    title: {type: String, required: true},
    location: {type: String, required: true},
    date: {type: Date},
    attendees: [String],
}, {
    timestamps: true
    }
);


module.exports = mongoose.model('Event', eventSchema);