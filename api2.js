let request = new XMLHttpRequest();

function weather(apiData) {
    let weatherData = JSON.parse(apiData);
    console.log(weatherData);
    let htmlString = "<div><strong>City:</strong>" + weatherData.name + "</div>";
    htmlString += "<div><strong>Current Weather:</strong>" + weatherData.weather[0].description + "</div>";
    htmlString += "<div><strong>Country:</strong>" + weatherData.sys.country + "</div>";
    document.getElementById("data1").innerHTML = htmlString;
}

function submitCity() {
    city = document.getElementById("cityForm")["city"].value
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=6ebea87dfc131fd5402906ce4b098ab8");
        request.send();
}



request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        weather(this.responseText);
    };
    if (this.readyState == 4 && this.status == 404) {
        document.getElementById("data").innerHTML = "<strong>City not found. Please try again</strong>";
    }
}

request.open("GET", submitCity());

request.send();
