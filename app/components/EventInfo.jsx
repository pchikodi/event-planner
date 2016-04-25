var React = require("react");
var actions = require("../actions/EventActions");

module.exports = React.createClass({
  deleteEvent: function(e){
        e.preventDefault();
        actions.deleteEvent(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteEvent}>&times;</span>
                </div>
                <div className="panel-body">
                    {this.props.info.tagline}
                </div>
            </div>
        )
    }
})
