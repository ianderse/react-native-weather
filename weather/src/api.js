var _ = require('lodash');

var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=e9f69e28403f590b27e5bf9c125340b7'

var kelvinToF = function(kelvin) {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + '˚F'
};

module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  return fetch(url).then(function(response){
    return response.json();
  }).then(function(json){
    return {
      city: _.capitalize(json.name),
      temperature: kelvinToF(json.main.temp),
      description: _.capitalize(json.weather[0].description)
    }
  });
}
