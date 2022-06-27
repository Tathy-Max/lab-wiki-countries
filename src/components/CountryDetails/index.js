import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export function CountryDetails({ countriesInfo }) {
  console.log(countriesInfo);

  const { id } = useParams();
  console.log(id);

  return (
    <div>
      {countriesInfo
        .filter((currentElement) => {
          return currentElement.alpha3Code === id;
        })
        .map((currentElement) => {
          console.log(currentElement);
          return (
            <>
              <h1>{currentElement.name.official}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={{ width: '30%' }}>Capital</td>
                    <td>{currentElement.capital[0]}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>
                      {currentElement.area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        {currentElement.borders.map((currentElement) => {
                          return <li>{currentElement}</li>;
                        })}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          );
        })}
    </div>
  );
}
