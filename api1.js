//how to retrieve data from an API

let request = new XMLHttpRequest();
//XML stands for extensible mark up language - just cos it uses the above doesn't mean that it will be in xml format
request.onreadystatechange() = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
}

request.open("GET", https://swapi.com/api/people/1")

request.send();
