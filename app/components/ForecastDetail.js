var React = require('react');
var DayWeather = require('../components/DayWeather');
var helpers = require('../utils/helper-functions');

var styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center'
  }
}

function ForecastDetail(props){
  var weather = props.location.state.weather;
  return (
    <div>
      <DayWeather day={props.location.state.weather} />
      <div style={styles.descriptionContainer}>
        {console.log(props.children)}
        <p>{props.routeParams.city}</p>
        <p>{weather.weather[0].description}</p>
        <p>min temp: {helpers.tempConverter(weather.temp.min)} degrees</p>
        <p>max temp: {helpers.tempConverter(weather.temp.max)} degrees</p>
        <p>humidity: {weather.humidity}</p>
      </div>
    </div>
  )
}

module.exports = ForecastDetail;
