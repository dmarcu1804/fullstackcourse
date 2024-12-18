import axios from "axios";
import { useEffect, useState } from "react";


const ShowInformation = ({ country }) => {
  const api_key = import.meta.env.VITE_WAPP
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${api_key}&units=metric`
    ).then(response => {
      setWeather(response.data)
    });
  }, [country]);

  if (!weather) return null;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <ul>
        <li>Capital: {country.capital[0]}</li>
        <li>Area: {country.area}</li>
      </ul>
      <div>
        <h3>Languages:</h3>
        <ul>
          {Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />

      <h2> Weather in {country.capital[0]}</h2>
      {weather && <p>temperature {weather.main.temp} Celsius degrees </p>}
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  );
};

export default ShowInformation;
