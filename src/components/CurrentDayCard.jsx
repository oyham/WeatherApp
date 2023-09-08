import { formatDate } from '../helpers/formatDate'
import { getWeatherImage } from '../helpers/weatherImage';
import cloudbg from '../assets/images/Cloud-background.png'
import location from '../assets/images/map-pin-line.png'

const CurrentDayCard = ({ currentDay, weatherData, cityName, country, toggleForm }) => {
    const firstHourData = weatherData[currentDay]?.temperatures?.[0];
    const weatherImage = getWeatherImage(firstHourData.icon);

    console.log(firstHourData)
    return (
        <div className="today">
            <button className='search__btn' onClick={toggleForm}>Buscar por ciudad</button>
            {weatherData[currentDay] && weatherData[currentDay].temperatures && weatherData[currentDay].temperatures.length > 0 ? (
                <div className="card__today">
                <img src={cloudbg} alt="cloud-background" className='cloud__bg' />
                    <img src={weatherImage} alt="weather icon" className='icon__img' />
                    <p className='temp'>{parseFloat(firstHourData.temp.toFixed())}<span>°C</span></p>
                    <p>T° {parseFloat(firstHourData.feels_like.toFixed())}</p>
                    <p className='description'>{firstHourData.description}</p>
                    <div className='today__info'>
                        <div className='today__grid'>
                            <p>Hoy</p>
                            <span className='dot'>•</span>
                            <h4 className='current__day'>{formatDate(currentDay)}</h4>
                        </div>
                       <h4 className='location'><img src={location} alt='location' className='location__png'/> {cityName} - {country}</h4>
                    </div>
                </div>
            ) : (
                <p>No hay datos disponibles para este día.</p>
            )}
        </div>
    )
}

export default CurrentDayCard