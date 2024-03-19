import getWeatherData from './api_functions'
import setContentToDom from './dom_functions'

const form = document.querySelector('form')
const locationInput = document.querySelector('input#location-input')
const error = document.querySelector('#error')

const showWeather = () => {
    getWeatherData(locationInput.value)
        .then((r) => {
            setContentToDom(r)
            error.textContent = ''
        })
        .catch((err) => {
            console.error(err)
            error.textContent = err.message
        })
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    showWeather()
})
