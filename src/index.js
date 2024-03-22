import getWeatherData from './api_functions'
import setContentToDom from './dom_functions'

const form = document.querySelector('form')
const locationInput = document.querySelector('input#location-input')
const error = document.querySelector('#error')
const switchUnitsBtn = document.querySelector('#switch_units')

let weatherData
let celsius = true

const showWeather = () => {
    getWeatherData(locationInput.value)
        .then((r) => {
            weatherData = r
            setContentToDom(weatherData, celsius)
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
    showWeather()
})
