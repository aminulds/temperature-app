const apiKey = '5df779038a66e5f42ca9704d0d6bdbbe';

// Selector
const inputCity = document.getElementById('inputCity');
const searchButton = document.getElementById('searchButton');
const displayCity = document.getElementById('displayCity');
const displayTempValue = document.getElementById('displayTempValue');
const displayCondition = document.getElementById('displayCondition');
const weatherIcon = document.getElementById('weatherIcon');

// Function
const fetchData = () =>{
    const cityName = inputCity.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    // fetch api data
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // Collect data
        const city = data.name;
        let {temp} = data.main;
        temp = Math.round(temp - 273.15);
        const condition = data.weather[0].main;
        const icon = data.weather[0].icon;
        // display icon
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        weatherIcon.setAttribute('src', iconUrl);
        //Display data
        displayCity.textContent = city;
        displayTempValue.textContent = temp;
        displayCondition.textContent = condition;
        // clear city input field
        inputCity.value = '';   
    })
}

// addEventListener
searchButton.addEventListener('click', fetchData);
