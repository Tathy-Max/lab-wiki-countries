import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export function CountryDetails({ countriesInfo }) {
  console.log(countriesInfo); 

  const { country } = useParams();
  console.log(country); 

  return (
    <>
    {countriesInfo.filter((currentElement) => {
        return (currentElement.alpha3code === country.id)
        })
    }
);
    </>      
}


