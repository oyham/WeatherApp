export function processWeatherData(apiData) {
    const processedData = {};

    for (const item of apiData) {
        const dateKey = item.dt_txt.slice(0, 10); // Usamos la fecha como clave
        if (!processedData[dateKey]) {
            processedData[dateKey] = {
                temperatures: [],
                maxTemp: -Infinity,
                minTemp: Infinity,
                description: '',
                icon: '',
            };
        }

        // Crea un objeto para cada hora y agrega los valores
        const hourObject = {
            hour: item.dt_txt.slice(11),
            temp: item.main.temp,
            feels_like: item.main.feels_like,
            description: item.weather[0].description,
            humidity: item.main.humidity,
            visibility: item.visibility,
            wind: item.wind.speed,
            pressure: item.main.pressure,
            icon: item.weather[0].icon,
        };
        processedData[dateKey].temperatures.push(hourObject);

        // Actualizar maxTemp y minTemp en función de la temperatura actual
        const currentTemp = item.main.temp;
        if (currentTemp > processedData[dateKey].maxTemp) {
            processedData[dateKey].maxTemp = currentTemp;
        }
        if (currentTemp < processedData[dateKey].minTemp) {
            processedData[dateKey].minTemp = currentTemp;
        }

        const description = item.weather[0].description
        const icon = item.weather[0].icon
        processedData[dateKey].description = description
        processedData[dateKey].icon = icon
    }
    return processedData;
}
