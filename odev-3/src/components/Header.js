import React from 'react'
import { useWeather } from '../Context/WeatherContext';

export default function Header() {
  const { city } = useWeather();
  return (
    <h1>{city.name} Daily Weather Forecast</h1>
  )
}
