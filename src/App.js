import React, { useState } from 'react';
import './App.css';
import {processValue, getDivisions} from './FizzBuzz';

function App() {
  const [values, setValues] = useState([]);
  const [results, setResults] = useState([]);
  const [divisions, setDivisions] = useState([]);

  const handleInputChange = (event) => {
    const newValue = event.target.value.split(',').map(String);
    setValues(newValue);
  };

  const handleProcess = () => {
    const newResults = values.map((value) => processValue(value.trim()));
    const newDivisions = getDivisions();
    setResults(newResults);
    setDivisions(newDivisions);
  };

  return (
    <div className="App">
      <h1>FizzBuzz</h1>
      <input type="text" placeholder="Enter comma-separated values" onChange={handleInputChange} />
      <button onClick={handleProcess}>Process</button>
      {results.length > 0 && (
        <div>
          <h2>Results</h2>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
          <h2>Divisions Performed:</h2>
          <ul>
            {divisions.map((division, index) => (
              <li key={index}>{division}</li>
            ))}
            </ul>
        </div>
      )}
    </div>
  );
}

export default App;
