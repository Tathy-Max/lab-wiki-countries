import { Link } from 'react-router-dom';

export function CountrieList({ countriesInfo }) {
  //   console.log(countriesInfo);
  return (
    <div>
      {countriesInfo.map((country) => {
        return (
          <>
            <Link to={`/${country.alpha3Code}`}></Link>
          </>
        );
      })}
    </div>
  );
}
