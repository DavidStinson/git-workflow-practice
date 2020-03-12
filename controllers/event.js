const Event = require('../models/event');

module.exports = {
    index,
    new: newEvent,
    show,
    create,
    delete: deleteOne,
    edit,
    update
}

function index(req, res) {
    res.render('index');
}

function newEvent(req, res) {
    res.render('events/new');
}

function show(req, res) {
    Event.findById(req.params.id, function(err, event) {
        res.render('events/show', {event});
    });
}

function create(req, res) {
    
    res.render('events/show');
}

function deleteOne(req, res) {
    
    res.render('events/show');
}

function edit(req, res) {
    
    res.render('events/show');
}

function update(req, res) {
    
    res.render('events/show');
}