import getWeatherData from './api_functions'

const form = document.querySelector('form')
const locationInput = document.querySelector('input')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    getWeatherData(locationInput.value).then((r) => {
        console.log(r)
    })
})
