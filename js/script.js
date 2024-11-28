function getLocation(){

    let loc = document.getElementById('checkWeather').value;
    
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=metric&key=NJQ3MSTFNA799ETMECM7PBUPL&contentType=json`)
    .then(res => res.json()).then(res1 => {

        if(res1 && res1.address){

            document.getElementById('currentWeather').innerHTML = `
                <div class="current-weather">
                    <div class="location">
                        <h2>${res1.address}</h2>
                        <p>Latitude : ${res1.latitude}</p>
                        <p>Longitude : ${res1.longitude}</p>
                    </div>
                    <div class="weather-details">
                        <img src="https://openweathermap.org/img/wn/01d.png" alt="Weather Icon" class="weather-icon">
                        <h3 class="temperature">18°C</h3>
                        <p class="description">Clear Sky</p>
                        <p>Humidity: 55%</p>
                        <p>Wind Speed: 10 km/h</p>
                    </div>
                </div>

                <div class="forecast">
                    <h2>7-Day Forecast</h2>
                    <div class="forecast-container">
                        <div class="forecast-day">
                            <h4>Mon</h4>
                            <img src="https://openweathermap.org/img/wn/02d.png" alt="Cloudy Icon">
                            <p>15°C</p>
                        </div>
                        <div class="forecast-day">
                            <h4>Tue</h4>
                            <img src="https://openweathermap.org/img/wn/03d.png" alt="Partly Cloudy Icon">
                            <p>17°C</p>
                        </div>
                        <div class="forecast-day">
                            <h4>Wed</h4>
                            <img src="https://openweathermap.org/img/wn/04d.png" alt="Cloudy Icon">
                            <p>16°C</p>
                        </div>
                        <div class="forecast-day">
                            <h4>Thu</h4>
                            <img src="https://openweathermap.org/img/wn/09d.png" alt="Rain Icon">
                            <p>14°C</p>
                        </div>
                        <div class="forecast-day">
                            <h4>Fri</h4>
                            <img src="https://openweathermap.org/img/wn/10d.png" alt="Rain Icon">
                            <p>13°C</p>
                        </div>
                        <div class="forecast-day">
                            <h4>Sat</h4>
                            <img src="https://openweathermap.org/img/wn/11d.png" alt="Thunderstorm Icon">
                            <p>12°C</p>
                        </div>
                        <div class="forecast-day">
                            <h4>Sun</h4>
                            <img src="https://openweathermap.org/img/wn/13d.png" alt="Snow Icon">
                            <p>5°C</p>
                        </div>
                    </div>
                </div>
            `;
        }
    })
    .catch(error => {
        console.log(error);
    })
}
getLocation();