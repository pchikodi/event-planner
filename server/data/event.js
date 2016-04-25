var mongoose = require("mongoose");
var eventSchema = mongoose.Schema({
    name: String,
    tagline: String
});

module.exports = mongoose.model("event", eventSchema, "event");
