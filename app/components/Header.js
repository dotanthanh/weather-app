var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');


function Header(){
  return (
    <div >
      <GetCityContainer direction='row' margin={{marginLeft:'15px'}} />
    </div>
  )
}

module.exports = Header;
