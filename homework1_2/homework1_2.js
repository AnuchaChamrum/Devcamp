// api=https://dev.codekit.co/devcamp-api/covid-country.txt

import axios from 'https://cdn.skypack.dev/axios';

let url = "https://dev.codekit.co/devcamp-api/covid-country.txt" ;
const getData = async () => {
    const response = await axios.get(url);
    let allCovidData = response.data;
// Total today recovered
    let totalTodayRecovered = allCovidData.reduce((acc, cur) => acc + cur["todayRecovered"],0);
    console.log(totalTodayRecovered);

// countrys[] = todayDeaths < 10, population > 100000000
    let country = new Array();
    country = allCovidData.filter((obj) =>
     obj["todayDeaths"] < 10 && obj["population"] > 100000000)
     .map((obj) => obj["country"]);
    console.log(country);

}
getData()