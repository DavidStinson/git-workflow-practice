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

function show(req, res, idx) {
    
    res.render('events/show');
}