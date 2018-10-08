let request = require('request');
const argv = require('yargs').argv;

// OpenWeather API key for simple1
let apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxx';
let city = argv.c || 'kalispell';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
//    console.log('body:', body);
//    console.log('weather:', weather);
    console.log(message);
  }
});