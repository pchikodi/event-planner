var React = require("react");
var actions = require("../actions/EventActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          tagline:""
      }
    },
    addEvent:function(e){
        e.preventDefault();
        actions.addEvent(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addEvent}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Event Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Event Name" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">Tagline:</label>
                    <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Tagline" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Add Event</button>
                </div>
            </form>
        )
    }
})
