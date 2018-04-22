import React from "react";


const Weather = ({city, country, temperature, humidity, description}) => (
  <div>
  <p>Location: {city}, {country}</p>
  <p>Temperature: {temperature}</p>
  <p>Humidity: {humidity}</p>
  <p>Conditions: {description}</p>
  </div>
)

export default Weather;
