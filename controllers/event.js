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
    Event.findById(req.params.id, function(err, event) {
        res.render('events/show', {event});
    });
}

function create(req, res) {
    const event = new Event(req.body);
    console.log(req.body);
    event.save(function(err) {
        if (err) {
            return res.render('/events/new');
        }
        console.log(event)
        res.redirect('/events');
    });
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