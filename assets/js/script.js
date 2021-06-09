// https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys

var openWeatherAPIKey = "4eb039b0070fce508f83ad28919270e9";
var cityName = "orlando";
var openWeatherAPIUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + openWeatherAPIKey;

console.log(fetch(openWeatherAPIUrl));