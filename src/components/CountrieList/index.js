import { Link } from 'react-router-dom';

export function CountrieList({ countriesInfo }) {
  console.log(countriesInfo);
  return (
    <div>
      {countriesInfo.map((country) => {
        return (
          <>
            <p>
              <Link to={`/${country.alpha3Code}`}>{country.name.official}</Link>
            </p>
          </>
        );
      })}
    </div>
  );
}
