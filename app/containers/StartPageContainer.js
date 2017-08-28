var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');
var styles = require('../styles');

var StartPageContainer = React.createClass({
  render: function(){
    return (
      <div style={styles.container}>
        <h1 style={styles.header}> Enter a City and State </h1>
        <GetCityContainer direction='column' margin={{marginTop:'15px'}}/>
      </div>
    )}
});

module.exports = StartPageContainer;
