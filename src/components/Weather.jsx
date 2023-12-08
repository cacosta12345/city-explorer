import React from 'react';
import {When} from 'react-if'


function Weather(props){
    return (
        <When condition={props.forecast}>
            <ul>{props.forecast.map((day, inx)=>{
                return <li key={inx}>
                    <p>date: {day.date}</p>
                    <p>description: {day.description}</p>
                </li>
            })}</ul>
        </When>
    );
}

export default Weather;