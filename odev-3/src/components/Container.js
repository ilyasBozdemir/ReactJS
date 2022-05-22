import { useContext } from "react";
import WeatherContext from "../Context/WeatherContext";

function Container() {
  const {
    data,
    city,
    control,
    cityInput,
    setCityInput,
    day,
    dayIndex,
    getDay,
    setCurrentCity,
  } = useContext(WeatherContext);

  return (
    <>
      <div className="textCenter">
        <h1> Weather App</h1>
        <hr />
        <input
          type="text"
          value={cityInput}
          placeholder="Şehir Gir"
          onChange={(e) => setCityInput(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && setCurrentCity(cityInput);
          }}
        />
        <button onClick={() => setCurrentCity(cityInput)}>Search</button>
      </div>
      {control && (
        <>
          <p>Selected City : {city.name}</p>
          <div className="displayInline">
            <h4>Today ({day})</h4>
            <p>
              <img
                src={`http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`}
                alt="Weather Icon"
                width="80"
                height="80"
                draggable="false"
              />
            </p>
            <p>
              {data.daily[0].temp.min}°C / {data.daily[0].temp.max}°C
            </p>
          </div>
          <div className="displayInline">
            {data.daily.map((daily, index) => {
              return (
                index <= 6 && (
                  <div key={index}>
                    <h4>{getDay(dayIndex + index + 1)}</h4>
                    <p>
                      <img
                        src={`http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`}
                        alt="Weather Icon"
                        width="80"
                        height="80"
                        draggable="false"
                      />
                    </p>
                    <p>
                      {data.daily[index + 1].temp.min}°C /{" "}
                      {data.daily[0].temp.max}°C
                    </p>
                      <hr/>
                  </div>
                )
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Container;
