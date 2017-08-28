var weekDays = {
  '0': 'Monday',
  '1': 'Tuesday',
  '2': 'Wednesday',
  '3': 'Thursday',
  '4': 'Friday',
  '5': 'Saturday',
  '6': 'Sunday'
};

var monthsDay = {
  '0': 'January',
  '1': 'February',
  '2': 'March',
  '3': 'April',
  '4': 'May',
  '5': 'June',
  '6': 'July',
  '7': 'August',
  '8': 'September',
  '9': 'November',
  '10': 'October',
  '11': 'December'
}

function getDate(unixTimestamp){
  var date = new Date(unixTimestamp*1000);
  var day = weekDays[date.getDay()];
  var month = monthsDay[date.getMonth()] + ' ' + date.getDate();
  return day + ', ' + month;
}

function tempConverter(kelvin){
  return ((kelvin - 273.15)* 1.8 + 32.00).toFixed(0);
}

module.exports = {
  getDate: getDate,
  tempConverter: tempConverter
}
