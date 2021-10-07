import React, { useState } from "react";
import ProgressBar from "./components/progressBar";
import ResultsTable from "./components/resultsTable.js";

const arrCities = ["Managua", "London", "Amsterdam", "Paris", "Berlin"];

const fetchWeatherData = (city) => {
  return fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      process.env.REACT_APP_API_KEY
  );
};

const App = () => {
  const [temperature, setTemperature] = useState(0);
  const [currentCity, setCurrentCity] = useState(0);
  const [arrResponses, setArrResponses] = useState([]);

  const resetStateProperties = () => {
    setTemperature(0);
    setArrResponses([]);
    setCurrentCity(0);
  };

  const handleInputChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentCity < 5) {
      const res = await fetchWeatherData(arrCities[currentCity]);
      const fetchedData = await res.json();

      const { main } = fetchedData;
      const { temp } = main;
      const arrTemp = [
        ...arrResponses,
        {
          city: arrCities[currentCity],
          userResponse: temperature,
          isCorrect:
            Number(temperature) >= temp && Number(temperature) <= temp + 5,
          cityTemperature: temp,
        },
      ];
      setArrResponses(arrTemp);
      setTemperature(0);
      setCurrentCity(currentCity + 1);
    } else {
      resetStateProperties();
    }
  };

  return (
    <div className='App container'>
      <div className='row'>
        {currentCity === 5 && (
            <div className="row text-center">
            <h1 className="display-2 text-info">
              {arrResponses.filter((item) => item.isCorrect).lenght > 2 ? "You've won, Congrats!" : "You lose!"}</h1>
            </div>
        )}
        {currentCity !== 5 && (
          <>
            <h3>Current City: {arrCities[currentCity]}</h3>
            <input
              value={temperature}
              onChange={handleInputChange}
              type='text'
              placeholder='Guess the Temperature'
            />
          </>
        )}
        <div className='row my-3'>
          <ProgressBar currentCity={currentCity} />
        </div>
        <button
          className='btn btn-dark my-4 btn-lg'
          onClick={handleSubmit}
        >
          {currentCity !== 5 ? "Submit" : "Play Again"}
        </button>
      </div>
      <div className="row">
        <ResultsTable arrResponses={arrResponses} />
      </div>
    </div>
  );
};

export default App;
