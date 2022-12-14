import { useEffect, useState } from 'react';
import './App.css';
import Country from './component/Country/Country';

function App() {
  return (
    <div className="App">
      <LoadCountrys></LoadCountrys>
    </div>
  );
}

function LoadCountrys() {
  const [countrys, setCountrys] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(Response => Response.json())
      .then(data => setCountrys(data))
  }, []);

  return (
    <div>
      <h1>Visiting All Countrys</h1>
      <h2>Total Country : {countrys.length}</h2>
      <div className='country'>
        {
          countrys.map(country => <Country country={country} key={country.name.common}></Country>)
        }
      </div>

    </div>
  );
}

export default App;
