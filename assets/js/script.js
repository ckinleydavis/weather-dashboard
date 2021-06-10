// API VARIABLES
var openWeatherAPIKey = "4eb039b0070fce508f83ad28919270e9";
var cityName = "orlando"; // Hardcoded for testing
var openWeatherAPIUrl = "https://api.openweathermap.org/data/2.5/weather?q=" 
        + cityName + "&appid=" + openWeatherAPIKey;

// Search Input & Button Variables
var searchEl = document.querySelector('.prompt');   // document.getElementsByClassName("prompt");
var resultsEl = document.querySelector('.results');     // document.getElementsByClassName("results");

// FETCH RESULTSET

    function renderMessage() {
        var resultSet = JSON.parse( localStorage.getItem("name") );

        if (resultSet !== null) {
            // ISSUE: HOW TO DISPLAY DATA TO HTML DIV CLASS = RESULTS?
            document.querySelector(".results").textContent = resultsEl.name;    //+ " current weather " + resultsEl.weather
            console.log(resultSet);
        }
    }

// var resultSet = function ( event ) {
    // event.preventDefault();
    fetch ( openWeatherAPIUrl ) .then ( function ( response ) {

        if ( response.ok ) {
            response.json() .then ( function ( data ) {
                // console.log ( JSON.stringify ( data ) );
                // ISSUE: HOW TO RETRIEVE ONE KEY/VALUE PAIR FROM DATA? (I.E. NAME: "ORLANDO")
                // REFERENCE: https://www.sitepoint.com/loop-through-json-response-javascript/
                // localStorage.setItem("name", JSON.stringify ( data ) ); 
                // console.log (JSON.parse(localStorage.length));
                renderMessage();
            })
        } else {
            alert("Please enter a city name.");
        }
    })
// }

// searchEl.addEventListener('submit', searchCity);
// console.log("Search Input: " + searchInput);
// console.log("Result Set: " + resultSet);