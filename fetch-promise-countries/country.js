const regionEurope=fetch("https://restcountries.eu/rest/v2/region/europe")
.then((data)=>data.json())
// .then((countries)=>console.log(countries));

const regionAsia=fetch("https://restcountries.eu/rest/v2/region/asia")
.then((data)=>data.json())
// .then((countries)=>console.log(countries));



Promise.all([regionEurope,regionAsia])
.then((countries)=>console.log(countries[0].concat(countries[1])));