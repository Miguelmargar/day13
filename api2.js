let request = new XMLHttpRequest();

function weather(apiData) {
    let weatherData = JSON.parse(apiData);
    console.log(weatherData);
    let htmlString = "<div><strong>City:</strong>" + weatherData.name + "</div>";
    htmlString += "<div><strong>Current Weather:</strong>" + weatherData.weather[0].description + "</div>";
    htmlString += "<div><strong>Country:</strong>" + weatherData.sys.country + "</div>";
    document.getElementById("data1").innerHTML = htmlString;
}

function cityChange() {
    let location = prompt("Enter Location")
    return "https://api.openweathermap.org/data/2.5/weather?q="+location+"&APPID=6ebea87dfc131fd5402906ce4b098ab8"
}
//CHALLENGE IS TO CREATE A FORM THAT PICKS UP THE LOCATION GIVEN WITHIN THE FORM INSTEAD OF A PROMPT request


request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        weather(this.responseText);
    }
};

request.open("GET", cityChange());

request.send();
