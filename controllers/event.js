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
    
    res.render('events/show');
}

function create(req, res) {
    
    res.render('events/show');
}

function deleteOne(req, res) {
    
    res.render('events/show');
}

function edit(req, res) {
   Event.findById(req.params.id, function(err, event){
       res.render('events/update', {event});
   })
}

function update(req, res) {
    Event.findByIdAndUpdate(req.params.id, function(err, event){
        res.redirect(`events/${req.params.id}`);
    })
}