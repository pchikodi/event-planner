var dispatcher = require("../dispatcher");
var eventService = require("../services/eventService");

function EventStore() {
    var listeners = [];
    function onChange(listener) {
        getEvents(listener);
        listeners.push(listener);
    }

    function getEvents(cb){
        eventService.getEvents().then(function (res) {
            cb(res);
        });
    }

    function addEvent(event) {
      eventService.addEvent(event).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteEvent(event) {
      eventService.deleteEvent(event).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getEvents(function (res) {
           listeners.forEach(function (listener) {
               listener(res);
           });
       });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "event") {
            switch (split[1]) {
                case "addEvent":
                    addEvent(payload.event);
                    break;
                case "deleteEvent":
                    deleteEvent(payload.event);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = EventStore();
