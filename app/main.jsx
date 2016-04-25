var React = require("react");
var ReactDOM = require("react-dom");
var EventsList = require("./components/EventsList.jsx");
var eventsStore = require("./stores/eventsStore");

var _events = [];
var getEventsCallback = function(events){
    _events = events;
    render();
};
eventsStore.onChange(getEventsCallback);

function render(){
    ReactDOM.render(<EventsList events={_events} />, document.getElementById("container"));
}
