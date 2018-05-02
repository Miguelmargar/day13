//how to retrieve data from an API
let request = new XMLHttpRequest();
//XML stands for extensible mark up language - just cos it uses the above doesn't mean that it will be in xml format

let dataSource = document.getElementById("data");

function displayNicelyl(apiData) {
    let newData = JSON.parse(apiData);
        let count = 0;
        for (let i in newData) {
            count++;
            dataSource.innerHTML +="<strong>" + i + "</strong>" + ": " + newData[i] + "," + "<br>";
            if (count == 7) {
                break;
            }
        }
    }


//      dataSource.innerHTML = "<strong>Name:</strong> " + newData.name;

request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        displayNicelyl(this.responseText);
    }
};

request.open("GET", "https://swapi.co/api/people/1/");

request.send();
