var React = require('react');
var helpers = require('../utils/helper-functions');
var PropTypes = React.PropTypes;
var DayWeather = require('../components/DayWeather');

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 40
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100,
    display: 'block'
  },
  weather: {
    height: 100
  }
}

function Forecast(props){
  return (
    <div>
      {
        props.isLoading === true
        ? <h1 style={styles.header} > IS LOADING </h1>
        : <MiniForecast
            handleClickDetail={props.handleClickDetail}
            city={props.city}
            forecast_data={props.forecast_data} />
      }
    </div>
  )
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecast_data: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}

function MiniForecast(props){
  return (
    <div>
      <h1 style={styles.header} > {props.city} </h1>
      <div style={styles.container} >
        {props.forecast_data.list.map(function(listItem){
          return <DayWeather
                    handleClickDetail={props.handleClickDetail.bind(null,listItem)}
                    key={listItem.dt}
                    day={listItem}
                    city={props.city} />;
        })}
      </div>
    </div>
  )
}

module.exports = Forecast;
