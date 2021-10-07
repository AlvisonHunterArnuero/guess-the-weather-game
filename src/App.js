import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "./components/JumboTron";
import ProgressBar from "./components/progressBar";
import ResultsTable from "./components/resultsTable.js";
import Spinner from "./components/Spinner";
import './App.css';
import {
  SetUserTemperature,
  SetCurrentCity,
  UpdateUserResponses,
  FetchWeatherData
} from "./redux/weather/actions";

const arrCities = ["Managua", "London", "Amsterdam", "Paris", "Berlin"];

// const fetchWeatherData = (city) => {
//   return fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//       city +
//       "&units=metric&appid=" +
//       process.env.REACT_APP_API_KEY
//   );
// };

const App = () => {
  const temperature = useSelector((state) => state.guessWeather.temperature);
  const currentCity = useSelector((state) => state.guessWeather.currentCity);
  const arrResponses = useSelector((state) => state.guessWeather.arrResponses);
  const cityWeather = useSelector((state) => state.guessWeather.cityWeather);
  const isLoading = useSelector((state) => state.guessWeather.isLoading);

  const dispatch = useDispatch();

  const resetStateProperties = () => {
    dispatch(SetUserTemperature(0));
    dispatch(UpdateUserResponses([]));
    dispatch(SetCurrentCity(0));
  };

  const handleInputChange = (e) => {
    dispatch(SetUserTemperature(e.target.value));
  };

  useEffect(() => {
    if(JSON.stringify(cityWeather)==='{}') return;
    const { main } = cityWeather;
    const { temp } = main;
    const arrTemp = [
      ...arrResponses,
      {
        city: arrCities[currentCity],
        userResponse: temperature,
        isCorrect:
          parseFloat(temperature) >= temp &&
          parseFloat(temperature) <= temp + 5,
        cityTemperature: temp,
      },
    ];

    dispatch(UpdateUserResponses(arrTemp));
    dispatch(SetUserTemperature(0));
    dispatch(SetCurrentCity(currentCity + 1));
  }, [cityWeather]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentCity < 5) {
      dispatch(FetchWeatherData(arrCities[currentCity]));
    } else {
      resetStateProperties();
    }
  };

  return (
    <div className='App container'>
      <div className='row'>
        <Jumbotron currentCity={currentCity} arrResponses={arrResponses} />
        {currentCity !== 5 && (
          <>
          {isLoading ? <Spinner /> : (<h5 className='text-secondary lead my-2'>
              Current City: {arrCities[currentCity]}
            </h5>)}
            <div className='input-group mb-3'>
              <input
                value={temperature}
                onChange={handleInputChange}
                type='text'
                placeholder={arrCities[currentCity]}
                className='form-control'
                aria-label={arrCities[currentCity]}
                aria-describedby='button-addon2'
              />
              <button
                className='btn btn-outline-secondary'
                type='button'
                id='button-addon2'
                onClick={handleSubmit}
              >
                {currentCity !== 5 ? "Submit" : "Play Again"}
              </button>
            </div>
          </>
        )}
      </div>
      <div className='row my-3'>
        <ProgressBar currentCity={currentCity} />
      </div>
      <div className='row'>
        <ResultsTable arrResponses={arrResponses} />
      </div>
      <div className='row my-3'>
        {currentCity === 5 && (
          <button
            className='btn btn-outline-success text-uppercase'
            type='button'
            id='button-addon2'
            onClick={resetStateProperties}
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
