const Event = require("../models/event");

module.exports = {
  index,
  new: newEvent,
  show,
  create,
  delete: deleteOne,
  edit,
  update
};

function index(req, res) {
  Event.find({}, function(err, events) {
    res.render("index", { events });
  });
}

function newEvent(req, res) {
  res.render("events/new");
}

function show(req, res) {
  Event.findById(req.params.id, function(err, event) {
    res.render("events/show", { event });
  });
}

function create(req, res) {
  const event = new Event(req.body);
  console.log(req.body);
  event.save(function(err) {
    if (err) {
      console.log(err);
      return res.render("events/new");
    }
    console.log(event);

    res.redirect("/");
  });
}

function deleteOne(req, res) {
  Event.findByIdAndDelete(req.params.id, function(err) {
    res.redirect("/");
  });
}

function edit(req, res) {
  Event.findById(req.params.id, function(err, event) {
    res.render("events/update", { event });
  });
}

function update(req, res) {
  Event.findByIdAndUpdate(req.params.id, req.body, function(err, event) {
    res.redirect(`/events/${req.params.id}`);
  });
}
