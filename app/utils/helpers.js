var axios = require('axios')

var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
var key = '&type=accurate&APPID=3962821d9ab1b98a369ddb74cbb0b8b9';

function getCity5Days(city){
  return axios.get(url+city+key+'&cnt=5')
    .then(function(weather){
      return weather.data;
    })
}

module.exports = {
  getCity5Days: getCity5Days
};
