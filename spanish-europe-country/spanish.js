
const spanCountry =
    fetch("https://restcountries.eu/rest/v2/lang/es")
        .then((data) => data.json())
        .then((countries) => {
            countries.filter((ele => {
                if(ele.region == "Europe"){
                    console.log(ele.name);
                }
            }));
        })



