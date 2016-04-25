var React = require("react");
var SchoolInfo = require("./EventInfo.jsx")
var AddEvent = require("./AddEvent.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="row">
                  <div className="col-md-6">
                      <AddEvent />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                      {
                          this.props.events.map(function(s,index){
                              return(
                                  <SchoolInfo info={s} key={"event"+index} />
                              )
                          })
                      }
                  </div>
                </div>
           </div>
       )
   }
});
