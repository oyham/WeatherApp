import { useState, useEffect } from 'react'
import './App.css'
import { getWeatherData } from './services/api'
import { getCurrentDate } from './helpers/getCurrentDate';
import { processWeatherData } from './helpers/weatherUtils';
import useShowMenu from './hooks/useShowMenu';

import Loader from './components/Loader'
import Message from './components/Message'
import Form from './components/Form';
import CurrentDayCard from './components/CurrentDayCard';
import ForecastDayCard from './components/ForecastDayCard';
import CurrentDayHightlights from './components/CurrentDayHightlights';
import { Footer } from './components/Footer'

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [name, setName] = useState('Chacabuco')
  const [cityName, setCityName] = useState(name)
  const [country, setCountry] = useState('')
  const currentDay = getCurrentDate();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null)
  const { showForm, toggleForm } = useShowMenu();

  useEffect(() => {
    async function fetchData() {
      try {
        const values = await getWeatherData(name)
        setStatus('pending')
        setWeatherData(processWeatherData(values.list));
        setCityName(values.city.name)
        setCountry(values.city.country)
        setStatus('successful')
      } catch (error) {
        setError(error)
        setStatus('rejected')
      }
    }
    fetchData()

  }, [])

  const handleFormSubmit = async (name) => {
    if (name.trim() !== '') {
      try {
        const values = await getWeatherData(name);
        setCityName(values.city.name);
        setCountry(values.city.country);
        setWeatherData(processWeatherData(values.list));
      } catch (error) {
        setError(error);
        alert(`Error al buscar ${name}`)
      }
    } else {
      alert('El nombre de la ciudad no puede estar vacío');
    }
  };


  return (
    <div className='App'>
      <Form onFormSubmit={handleFormSubmit} showForm={showForm} toggleForm={toggleForm} />
      <div className="cards__container">
        {(status === 'pending' || status === 'idle') ?
          (<Loader />) :
          (status === 'rejected') ?
            (<Message msg={`La solicitud ha sido rechazada. Error: ${error}`} bgColor="red" />) :
            Object.keys(weatherData).length > 0 ? (
              <>
                <CurrentDayCard currentDay={currentDay} weatherData={weatherData} cityName={cityName} country={country} toggleForm={toggleForm} />
                <main className='right__container'>
                  <article className='forecast__section'>
                    {Object.keys(weatherData).slice(1).map((dateKey) => (
                      <ForecastDayCard
                        key={dateKey}
                        dateKey={dateKey}
                        maxTemp={weatherData[dateKey]?.maxTemp}
                        minTemp={weatherData[dateKey]?.minTemp}
                        description={weatherData[dateKey]?.description}
                        icon={weatherData[dateKey]?.icon}
                      />
                    ))}
                  </article>
                  <CurrentDayHightlights currentDay={currentDay} weatherData={weatherData} />
                  <Footer />
                </main>
              </>
            ) : (
              <p>Loading data...</p>
            )}
      </div>
    </div>
  )
}

export default App


