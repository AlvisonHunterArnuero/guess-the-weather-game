import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomCities } from "./Utils";
import "./App.css";
import Jumbotron from "./components/JumboTron";
import ProgressBar from "./components/ProgressBar/index";
import ResultsTable from "./components/ResultsTable/index.js";
import Spinner from "./components/Spinner";
import USerGuessInput from "./components/UserGuessInput";
import {
  SetUserTemperature,
  SetCurrentCity,
  UpdateUserResponses,
  FetchWeatherData,
} from "./redux/weather/actions";
  // Get all five random cities
  let arrCities = getRandomCities();

const App = () => {
  const temperature = useSelector((state) => state.guessWeather.temperature);
  const currentCity = useSelector((state) => state.guessWeather.currentCity);
  const arrResponses = useSelector((state) => state.guessWeather.arrResponses);
  const cityWeather = useSelector((state) => state.guessWeather.cityWeather);
  const isLoading = useSelector((state) => state.guessWeather.isLoading);

  const dispatch = useDispatch();

  const resetStoreStateProperties = () => {
    dispatch(SetUserTemperature(0));
    dispatch(UpdateUserResponses([]));
    dispatch(SetCurrentCity(0));
    arrCities = [];
    arrCities = getRandomCities();
  };

  const handleInputChange = (e) => {
    dispatch(SetUserTemperature(e.target.value));
  };

  useEffect(() => {
    if (JSON.stringify(cityWeather) === "{}") return;
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
    // eslint-disable-next-line
  }, [cityWeather]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentCity < 5) {
      dispatch(FetchWeatherData(arrCities[currentCity]));
    } else {
      resetStoreStateProperties();
    }
  };

  return (
    <div className='App container'>
      <div className='row'>
        <Jumbotron currentCity={currentCity} arrResponses={arrResponses} />
        {currentCity !== 5 && (
          <>
            {isLoading ? (
              <Spinner />
            ) : (
              <div className='row my-2 text-uppercase justify-content-start h4'>
                <div className='col-auto text-dark'>Current City:</div>
                <div className='col-auto text-secondary'>
                  {arrCities[currentCity] || "All cities have been displayed"}
                </div>
              </div>
            )}
            <USerGuessInput
              temperature={temperature}
              fillerText={"Type in your best guess"}
              currentCity={currentCity}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </>
        )}
      </div>
      <div className='row my-2'>
        <ProgressBar currentCity={currentCity} />
      </div>
      <div className='row'>
        <ResultsTable arrResponses={arrResponses} />
      </div>
      <div className='row my-3 justify-content-center'>
        {currentCity >= 5 && (
          <button
            className='btn btn-success text-uppercase'
            type='button'
            id='button-addon2'
            onClick={resetStoreStateProperties}
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
