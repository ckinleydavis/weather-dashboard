$(document).ready(function(){

  
    $(".search-icon").on("click", function(){
        var searchValue = $('.search-value').val()
        console.log(searchValue)

        searchWeather(searchValue);


    })





var openWeatherAPIKey = "4eb039b0070fce508f83ad28919270e9";

function searchWeather(searchValue){
console.log("HEY WERE IN SEARCH WEATHER", searchValue)

var openWeatherAPIUrl = "http://api.openweathermap.org/data/2.5/weather?q=" 
 + searchValue + "&appid=" + openWeatherAPIKey + "&units=imperial";

 let config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "Content-Type", 
        //"Access-Control-Allow-Headers", 'Authorization', X-Requested-With"
    }
 }

 fetch(openWeatherAPIUrl)
.then(function(res){
    return res.json();

}).then(function(data){
    console.log(data)

    var cityName = $("<h2>").text( data.name);
    var cityTemp = $("<p class='card-text'>").text("Temperature: " + data.main.temp + "F");
    var cityHumidity = $("<p class='card-text' >").text("Humidity: " + data.main.humidity + "%");
    var cityWind = $("<p class='card-text'>").text("Wind: " + data.wind.speed + "MPH");

    var col =  $('<div>').addClass("col-md");
    var card = $('<div>').addClass("card");
    var cardBody =  $('<div>').addClass("card-body");
    var cardTitle =  $('<div>').addClass("card-title");

    cardTitle.append(cityName)
    col.append(card)
    card.append(cardBody)
    cardBody.append(cardTitle, cityTemp, cityHumidity, cityWind)

    $("#currentWeather").append(col);

    var coords = {
        lat: data.coord.lat,
        lon: data.coord.lon
    }

    searchFiveDay(coords);

}).catch(function(err){
    console.log(err);
});

function searchFiveDay(coords){
console.log("SEARCH FIVE DAY COORDS", coords);

var openWeatherFiveDayUrl = "http://api.openweathermap.org/data/2.5/onecall?lat=" + coords.lat + "&lon=" + coords.lon + "&appid=" + openWeatherAPIKey + "&units=imperial";

fetch(openWeatherFiveDayUrl)
.then(function(res){
    return res.json();
}).then(function(data){
    console.log("FIVE DAY DATA", data);
 
    var fiveDays = [data.daily[0],data.daily[1], data.daily[2],data.daily[3],data.daily[4]];
    // console.log("FIVE SINGLE DAY FORECASTS", fiveDays);
    
    // Day Names
    var dayOneName = $("<h3>").text(Date(data.daily[0].dt));
    var weekDayOne = dayOneName.toLocaleString("en-US", {  weekday: 'short' });
    // console.log("Day One Date: ", dayOneName);
    console.log("WEEK DAY ONE NAME: ", weekDayOne);

    var dayTwoName = $("<h3>").text(Date(data.daily[1].dt).toLocaleString("en-US", {  weekday: 'short' }));
    var dayThreeName = $("<h3>").text(Date(data.daily[2].dt).toLocaleString("en-US", {  weekday: 'short' }));
    var dayFourName = $("<h3>").text(Date(data.daily[3].dt).toLocaleString("en-US", {  weekday: 'short' }));
    var dayFiveName = $("<h3>").text(Date(data.daily[4].dt).toLocaleString("en-US", {  weekday: 'short' }));

    // Day Temps
    var dayOneTemp = $("<p class='card-text'>")
    .text("Temperature: " + data.daily[0].temp.day + "F");
    var dayTwoTemp = $("<p class='card-text'>")
    .text("Temperature: " + data.daily[1].temp.day + "F");
    var dayThreeTemp = $("<p class='card-text'>")
    .text("Temperature: " + data.daily[2].temp.day + "F");
    var dayFourTemp = $("<p class='card-text'>")
    .text("Temperature: " + data.daily[3].temp.day + "F");
    var dayFiveTemp = $("<p class='card-text'>")
    .text("Temperature: " + data.daily[4].temp.day + "F");
    // console.log("DAY ONE TEMPERATURE: ", dayOneTemp);

    // Card formatting
    var col =  $('<div>').addClass("col-md");
    var card = $('<div>').addClass("card");
    var cardBody =  $('<div>').addClass("card-body");
    var cardTitle =  $('<div>').addClass("card-title");

    col.append(card);
    card.append(cardBody);
    cardBody.append(
        weekDayOne, dayOneTemp, 
        dayTwoName, dayTwoTemp, 
        dayThreeName, dayThreeTemp, 
        dayFourName, dayFourTemp, 
        dayFiveName, dayFiveTemp,);

    $("#fiveDay-weather").append(col);

}).catch(function(err){
    console.log(err)
})


}


}
})


