const getWeather = async (location) => {
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=3db79071583644bf80e81103241803&q=${location}`,
    )
    const weatherData = await response.json()
    return weatherData
}

const getWeatherData = async (location) => {
    const weatherData = await getWeather(location)

    return {
        name: weatherData.location.name,
        region: weatherData.location.region,
        country: weatherData.location.country,
        temp_c: weatherData.current.temp_c,
        temp_f: weatherData.current.temp_f,
        feelslike_c: weatherData.current.feelslike_c,
        feelslike_f: weatherData.current.feelslike_f,
        humidity: weatherData.current.humidity,
        wind_dir: weatherData.current.wind_dir,
        wind_kph: weatherData.current.wind_kph,
        wind_mph: weatherData.current.wind_mph,
    }
}

export default getWeatherData
