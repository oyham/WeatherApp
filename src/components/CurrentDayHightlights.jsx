import ProgressBar from "./ProgressBar";

const CurrentDayHightlights = ({ currentDay, weatherData }) => {
    const firstHourData = weatherData[currentDay]?.temperatures?.[0];
    return (
        <>
            {weatherData[currentDay] && weatherData[currentDay].temperatures && weatherData[currentDay].temperatures.length > 0 ? (
                <div className='today__hl'>
                    <h3 className="title__hl h3__hl">Higthlights</h3>
                    <section>
                        <p className="title__hl">Viento</p>
                        <span>
                            {firstHourData.wind} mph
                        </span>
                    </section>
                    <section>
                        <p className="title__hl">Humedad</p>
                        <span className="humidity__hl">
                            {firstHourData.humidity}%
                            <div className="humidity__number">
                                <span>0</span>
                                <span>50</span>
                                <span>100</span>
                            </div>
                            <ProgressBar percentage={firstHourData.humidity}/>
                        </span>
                    </section>
                    <section>
                        <p className="title__hl">Visibilidad</p>
                        <span>
                            {firstHourData.visibility}
                        </span>
                    </section>
                    <section>
                        <p className="title__hl">Presión</p>
                        <span>
                            {firstHourData.pressure}
                        </span>
                    </section>
                </div>
            ) : (
                <p>No hay datos disponibles para este día.</p>
            )}
        </>
    )
}

export default CurrentDayHightlights