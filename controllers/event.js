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
    Event.find({}, function(err, events) {
        res.render('index',{events});
    })
}

function newEvent(req, res) {
    res.render('events/new');
}

function show(req, res) {
    
    res.render('events/show');
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