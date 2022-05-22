import axios from "axios";
import { useEffect } from "react";
import { useWeather } from "../Context/WeatherContext";
function DaysCard() {
  const { days, weather, setWeather, city } = useWeather();
  useEffect(() => {
    const API_KEY = "8aff4aa016d99bb07caf7a6bc85ee0af";
    const getData = async () => {
      const res = axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude={part}&appid=${API_KEY}`
      );
      setWeather((await res).data.daily);
    };
    getData();
  }, [city, setWeather]);
  return (
    <>
      {weather.map((item, i) => {
        return (
          <section key={i}>
            <div>
              <div>
                <p>{days[new Date(item.dt * 1000).getDay()].toUpperCase()}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt={`weather-icon "${i}"`}
                />
                <p>{item.weather[0].description.toUpperCase()}</p>
                {Math.round(item.temp.max - 273.15)} /  {Math.round(item.temp.min - 273.15)}
                &deg;C
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default DaysCard;
