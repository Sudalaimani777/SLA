export const Weather = ({weatherData} = {}) => {
    const {city, temperature, condition, hotImg, coldImg} = weatherData
  return (
    <>
        <section>
            {
                temperature >=25 ? (
                    <>
                        <h2>Weather in {city}</h2>
                        <p>Temperature: {temperature}°C</p>
                        <p>Condition: {condition}</p>
                        <img src={hotImg} alt="Hot Weather" />
                    </>
                )
                : (
                    <>
                        <h2>Weather in {city}</h2>
                        <p>Temperature: {temperature}°C</p>
                        <p>Condition: {condition}</p>
                        <img src={coldImg} alt="Cold Weather" />
                    </>
                )
            }
        </section>
    </>
  )
}

export default Weather;