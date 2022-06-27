import './App.css';
import countries from './countries.json';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Navbar } from './components/Navbar';
import { CountrieList } from './components/CountrieList';
import { CountryDetails } from './components/CountryDetails';

function App() {
  console.log(countries);

  const [countriesInfo, setCountriesInfo] = useState(' ');

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path={'/'}
          element={<CountrieList countriesInfo={countriesInfo} />}
        />
        <Route
          path={'/:id'}
          element={<CountryDetails countriesInfo={countriesInfo} />}
        />
      </Routes>
    </div>
  );
}

export default App;
