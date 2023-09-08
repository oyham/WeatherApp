import { formatDate } from '../helpers/formatDate'
import { getWeatherImage } from '../helpers/weatherImage';
function ForecastDayCard({ dateKey, maxTemp, minTemp, description, icon }) {
  const weatherImage = getWeatherImage(icon)
  return (
    <div className="cards">
      <h2 className='cards__date'>{formatDate(dateKey)}</h2>
      {maxTemp && minTemp ? (
        <>
          {weatherImage && <img src={weatherImage} alt={description} className='icon__img' />}
          <div className='temp__container'>
            <p className='temp__fc max'>{parseFloat(maxTemp.toFixed())}°C</p>
            <p className='temp__fc min'>{parseFloat(minTemp.toFixed())}°C</p>
          </div>
        </>
      ) : (
        <p>No hay datos disponibles para este día.</p>
      )}
    </div>
  );
}

export default ForecastDayCard;