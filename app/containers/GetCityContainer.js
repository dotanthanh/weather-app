var React = require('react');
var GetCity = require('../components/GetCity');
var PropTypes = React.PropTypes;

var GetCityContainer = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      city: ''
    }
  },
  handleUpdateCity: function(event){
    this.setState({
      city: event.target.value
    });
  },
  handleSubmitCity: function(event){
    event.preventDefault();
    this.setState({
      city: ''
    });
    this.context.router.push('/forecast/'+this.state.city);
  },
  render: function(){
    return (
      <div>
        <GetCity
          margin={this.props.margin}
          direction={this.props.direction}
          onUpdateCity={this.handleUpdateCity}
          onSubmitCity={this.handleSubmitCity}
          city={this.state.city} />
      </div>
  )}
})

module.exports = GetCityContainer;
