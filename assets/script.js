fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=2753c6a0c68389c5a7aea27b803cd8e4")
    .then(response => response.json())
    .then(data => {
        let dataOne = data[0]
        console.log(dataOne.lat);
        console.log(dataOne.lon);

       return fetch(`https://api.openweathermap.org/data/2.5/forecast?${dataOne.lat}&${dataOne.lon}&appid=2753c6a0c68389c5a7aea27b803cd8e4`)
    })



    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
