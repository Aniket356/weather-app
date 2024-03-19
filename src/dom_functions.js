const location = document.querySelector('#location')
const temperature = document.querySelector('#temperature')
const feelsLike = document.querySelector('#feels_like')
const humidity = document.querySelector('#humidity')
const windDir = document.querySelector('#wind_dir')
const windSpeed = document.querySelector('#wind_speed')

const setContentToDom = (weatherData, celsius = true) => {
    location.textContent = `${weatherData.name}, ${weatherData.region}, ${weatherData.country}`
    temperature.textContent = celsius
        ? `${weatherData.temp_c}° C`
        : `${weatherData.temp_f}° F`
    feelsLike.textContent = celsius
        ? `${weatherData.feelslike_c}° C`
        : `${weatherData.feelslike_f}° F`
    humidity.textContent = weatherData.humidity
    windDir.textContent = weatherData.wind_dir
    windSpeed.textContent = `${weatherData.wind_kph} kph (${weatherData.wind_mph} mph)`
}

export default setContentToDom
