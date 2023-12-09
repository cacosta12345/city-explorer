/* eslint-disable react/prop-types */
import { When } from 'react-if'

function WeatherDay({ day }) {
    return (
        <li>
            <p>Date: {day.date}</p>
            <p>Description: {day.description}</p>
        </li>
    );
}


function Weather(props) {
    return (
        <div className='weather-container'>
            <When condition={props.forecast}>
                <ul>
                    {props.forecast.map((day, index) => (
                        <WeatherDay key={index} day={day} />
                    ))}
                </ul>
            </When>
        </div>
    );
}

export default Weather;