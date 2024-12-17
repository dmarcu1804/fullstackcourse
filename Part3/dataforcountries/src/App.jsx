import { useState, useEffect } from "react";
import axios from "axios";
import DisplayCountry from "./Components/DisplayCountry"

const App = () => {
  const [countries, setCountries] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("getting countries");
    if (!value) return;

    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountries(response.data);
      });
  }, [value]);

  const handleCountryChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form>
        find countries: <input value={value} onChange={handleCountryChange} />
        <DisplayCountry countries = {countries} value = {value} />
      </form>
    </>
  );
};

export default App;
