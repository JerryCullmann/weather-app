const WeatherDay = ({min, max, weatherInfo}) => {

    return(

        <div>
            Type : {weatherInfo}
            Temp : {min} / {max}
        </div>
    )
}

export default WeatherDay()