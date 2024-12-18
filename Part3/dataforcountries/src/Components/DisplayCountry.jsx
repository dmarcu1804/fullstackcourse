import ShowInformation from "./ShowInformation";
import { useState, useEffect } from "react";

const DisplayCountry = ({ countries, value }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  // this ensures that the previous country that was showed is not displayed when searching for another one
  useEffect(() => {
    setSelectedCountry(null)
  }, [value]);

  if (!countries) return null;

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    console.log("Selected country updated:", country);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(value.toLowerCase())
  );

  if (filteredCountries.length >= 10) {
    return <p>Too many matches, please specify another filter.</p>;
  }

  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    return <ShowInformation country={country} />;
  }

  return (
    <div>
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.name.common}>
            {country.name.common}{" "}
            <button type = "button" onClick={() => handleCountryChange(country)}>show</button>
          </li>
        ))}
      </ul>
      {selectedCountry && <ShowInformation country = {selectedCountry} />}
    </div>
  );
};

export default DisplayCountry;
