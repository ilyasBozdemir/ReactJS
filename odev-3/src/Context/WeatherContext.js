import { useContext, createContext, useState } from "react";
import citiesJSON from "../data/cities.json";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);

  const [city, setCity] = useState(citiesJSON[69]);

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const value = {
    city,
    setCity,
    citiesJSON,
    days,
    weather,
    setWeather,
  };
  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);