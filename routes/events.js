var express = require("express");
var router = express.Router();
const eventCtrl = require("../controllers/event");

router.get("/", eventCtrl.index);
router.get("/events/new", eventCtrl.new);
router.get("/events/:id", eventCtrl.show);
router.put("/events/:id", eventCtrl.update);
router.delete("/events/:id", eventCtrl.delete);
router.get("/events/:id/update", eventCtrl.edit);
router.post("/events", eventCtrl.create);

module.exports = router;
