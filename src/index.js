import getWeatherData from './api_functions'
import setContentToDom from './dom_functions'

const form = document.querySelector('form')
const locationInput = document.querySelector('input#location-input')
const error = document.querySelector('#error')
const switchUnitsBtn = document.querySelector('#switch_units')

let weatherData
let celsius = true

const showWeather = (location, showInCelsius) => {
    getWeatherData(location)
        .then((r) => {
            weatherData = r
            setContentToDom(weatherData, showInCelsius)
            error.textContent = ''
        })
        .catch((err) => {
            console.error(err)
            error.textContent = err.message
        })
}

switchUnitsBtn.addEventListener('click', () => {
    if (celsius) {
        celsius = false
        switchUnitsBtn.textContent = 'Switch to °C'
    } else {
        celsius = true
        switchUnitsBtn.textContent = 'Switch to °F'
    }

    if (weatherData) setContentToDom(weatherData, celsius)
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    showWeather(locationInput.value, celsius)
})

// on initial load show weather of delhi
showWeather('New Delhi', celsius)
