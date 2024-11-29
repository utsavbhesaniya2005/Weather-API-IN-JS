function getLocation(){

    let loc = document.getElementById('checkWeather').value;
    
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=metric&key=NJQ3MSTFNA799ETMECM7PBUPL&contentType=json`)
    .then(res => res.json()).then(res1 => {

        let dayForecast = res1.days;

        if(res1 && res1.address){

            document.getElementById('currentWeather').innerHTML = `
                <div class="current-weather">
                    <div class="location">
                        <h2>${res1.address}</h2>
                        <p>Latitude : ${res1.latitude}</p>
                        <p>Longitude : ${res1.longitude}</p>
                    </div>
                    <div class="weather-details" id="currentForecast">
                    </div>
                </div>

                <div class="forecast">
                    <h2>Last 15-Day Weather Forecast</h2>
                    <div class="forecast-container" id="weeklyForecast">
                        
                    </div>
                </div>
            `;

             

            dayForecast.forEach(day => {

                let currentDate = new Date().toISOString().split('T')[0];

                let getCurrentDate = day.datetime;

                if(getCurrentDate === currentDate){
                    document.getElementById('currentForecast').innerHTML = `
                        <img src="./images/${day.icon}.png" alt="${day.conditions}" class="weather-icon">
                        <h3 class="temperature">${day.temp}°C</h3>
                        <p class="description">${day.conditions}</p>
                        <p>Humidity: ${day.humidity}%</p>
                        <p>Wind Speed: ${day.windspeed} km/h</p>
                    `;
                }
            });

            let weeklyData = res1.days;
            weeklyData.forEach(day => {
                
                document.getElementById('weeklyForecast').innerHTML += `
                    <div class="forecast-day">
                        <h4>${day.datetime}</h4>
                        <img src="./images/${day.icon}.png" alt="${day.conditions}">
                        <p>${day.temp}°C</p>
                    </div>
                `;
            });

        }
    })
    .catch(error => {
        document.getElementById('currentWeather').innerHTML = `<h1 style="color : black;font-size : 52px;">Data Cannot Be Found.</h1>`
    })
}
getLocation();