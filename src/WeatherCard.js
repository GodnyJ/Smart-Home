import React from 'react';

export default function WeatherCard({ column, temperature, description, imgSrc,colorNumber }) {
  const classNameWeatherCard = `weather-card weather-card-${column}`
  const classNameTemperatureCircle = `temperature-circle temperature-circle-${colorNumber}`

  return (
    <div className={classNameWeatherCard}>
      <div className="weather-icon">
        <img src={imgSrc} alt=""/>
      </div>
      <div className={classNameTemperatureCircle}>
        <div className="temperature-circle-inside"></div>
        <p className="temperature-value">{temperature}</p>
      </div>
      <p className="weather-description">{description}</p>
    </div>
  );
};