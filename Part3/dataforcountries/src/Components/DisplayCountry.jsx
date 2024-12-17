const DisplayCountry = ( {countries, value} ) => {
    return (
        <div>
            {/* if countries is not null, we filter the country based on the state 'value' (user typing)
             if 10 or more countries are returned, then we're asking for another filter
             
             if only 1 country is found, we display some information for that country i.e capital, area, 
             languages and flag
             
             if the query returns less than 10 countries, we display them*/}
            {!countries
            ? null
            : (() => {
                const filteredCountries = countries.filter((country) => {
                  return country.name.common
                    .toLowerCase()
                    .includes(value.toLowerCase());
                });

                if (filteredCountries.length >= 10) {
                  return (
                    <li>Too many matches, please specify another filter</li>
                  );
                }

                if (filteredCountries.length === 1) {
                  const country = filteredCountries[0];
                  return (
                    <div>
                      <h1 key={country.name.common}>{country.name.common}</h1>

                      <li>capital: {country.capital[0]}</li>
                      <li>area: {country.area}</li>

                      <div>
                        <h3>languages:</h3>
                        <ul>
                          {Object.values(country.languages).map(
                            (language, index) => {
                              return <li key={index}>{language}</li>;
                            }
                          )}
                        </ul>
                      </div>
                      <img src={country.flags.png} />
                    </div>
                  );
                }
                return filteredCountries.map((country) => (
                  <li key={country.name.common}>{country.name.common}</li>
                ));
              })()}
        </div>
    )
}

export default DisplayCountry