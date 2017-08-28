var React = require('react');
var Forecast = require('../components/Forecast');
var helpers = require('../utils/helpers');
var PropTypes = React.PropTypes;

var ForecastContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      forecast_data: {},
      isLoading: true,
    }
  },
  handleRender: function(){
    helpers.getCity5Days(this.props.routeParams.city)
      .then(function(forecast_data){
        this.setState({
          forecast_data: forecast_data,
          isLoading: false
        },()=>{console.log(this.state)})
      }.bind(this));
  },
  componentDidMount: function(){
    this.handleRender();
  },
  componentWillReceiveProps: function(nextProps){
    this.handleRender();
  },
  handleClickDetail: function(weather){
    this.context.router.push({
      pathname: '/detail/'+this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  },
  render: function(){
    return (
      <div>
        <Forecast
          handleClickDetail={this.handleClickDetail}
          city={this.props.routeParams.city}
          isLoading={this.state.isLoading}
          forecast_data={this.state.forecast_data} />
      </div>
    )
  }
})

module.exports = ForecastContainer;
