import React, { useState } from "react";

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
      setTemperature(0);
      setArrResponses([]);
      setCurrentCity(0);
    }
  };

  return (
    <div className='App'>
      {currentCity === 5 && (
        <>
          <div>
            {arrResponses.filter((item) => item.isCorrect).lenght > 2 ? (
              <h1>You've won, Congrats!</h1>
            ) : (
              <h1>You lose!</h1>
            )}
          </div>
          <div>
            <ul>
              {arrResponses.map(
                ({ city, userResponse, cityTemperature }, index) => {
                  return (
                    <li key={index}>
                      {city} | Temperature: {cityTemperature}°C |  Your Response: {userResponse}°C
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </>
      )}
      {currentCity !== 5 && (
        <>
          <h3>Current City: {arrCities[currentCity]}</h3>
          <input
            value={temperature}
            onChange={handleInputChange}
            type='text'
            placeholder=' Guess the Temperature'
          />
        </>
      )}

      <button onClick={handleSubmit}>
        {currentCity !== 5 ? "Submit" : "Play Again"}
      </button>
    </div>
  );
};

export default App;
