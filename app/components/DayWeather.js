var React = require('react');
var helpers = require('../utils/helper-functions');
var PropTypes = React.PropTypes;

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
    margin: 40,
    marginBottom: 30
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

function DayWeather(props){
  var date = helpers.getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div
      onClick={props.handleClickDetail}
      style={styles.dayContainer}>
        <img style={styles.weather} src={'/app/images/icons/' + icon + '.svg'} alt='Weather' />
      <h2 style={styles.subheader} > {date} </h2>
    </div>
  )
}

DayWeather.propTypes = {
  day: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired,
  }).isRequired,
  handleClickDetail: PropTypes.func
}

module.exports = DayWeather;
