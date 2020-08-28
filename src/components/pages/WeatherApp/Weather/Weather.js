import React from "react";

const Weather = props => (
    <div className="info-weather">
        {props.city &&
            <div>
                <p>Местоположение: {props.city}, {props.country}</p>
                <p>Температура: {props.temp}</p>
                <p>Давление: {props.pressure}</p>
                <p>Восход солнца: {props.sunrise}</p>
                <p>Заход солнца: {props.sunset}</p>
            </div>
        }
        <p className="error">{props.error}</p>
    </div>
)

export default Weather;