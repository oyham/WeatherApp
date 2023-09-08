import clear from '../assets/images/Clear.png'
import lightCloud from '../assets/images/LightCloud.png'
import heavyCloud from '../assets/images/heavyCloud.png'
import shower from '../assets/images/Shower.png'
import lightRain from '../assets/images/LightRain.png'
import heavyRain from '../assets/images/heavyRain.png'
import snow from '../assets/images/Snow.png'
// import hail from '../assets/images/Hail.png'
// import sleet from '../assets/images/Sleet.png'
// import thunderStorm from '../assets/images/thunderStorm.png'

export function getWeatherImage(icon) {
    switch (icon) {
        case '01d':
        case '01n':
            return clear;
        case '02d': // Icono para cielo parcialmente nublado durante el día
        case '02n': // Icono para cielo parcialmente nublado durante la noche
        case '03d': // Icono para nubes dispersas durante el día
        case '03n': // Icono para nubes dispersas durante la noche
            return lightCloud;
        case '04d': // Icono para nubes rotas durante el día
        case '04n': // Icono para nubes rotas durante la noche
            return heavyCloud;
        case '09d': // Icono para lluvia ligera durante el día
        case '09n': // Icono para lluvia ligera durante la noche
            return shower;
        case '10d': // Icono para lluvia moderada durante el día
        case '10n': // Icono para lluvia moderada durante la noche
            return lightRain;
        case '11d': // Icono para tormenta durante el día
        case '11n': // Icono para tormenta durante la noche
            return heavyRain;
        case '13d':
        case '13n':
            return snow;
        // Agrega más casos para otras descripciones y sus imágenes correspondientes
        default:
            return clear; // Imagen predeterminada si no coincide con ninguna descripción
    }
}