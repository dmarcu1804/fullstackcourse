const ShowInformation = ( {country} ) => {
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
      </div>
    );
}

export default ShowInformation