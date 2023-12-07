import React from 'react';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

function Weather(props){
    return (
        <div>
            <ul>
                <If condition={props.forecast}>
                  <Then>{props.forecast.map((day,idx)=>{
                    return (
                        <li key={idx}>{day.description}</li>
                    )
                  })}</Then>
                  <Else><p>nothing to show</p></Else>
                </If>           
            </ul>
        </div>
    );
}

export default Weather;