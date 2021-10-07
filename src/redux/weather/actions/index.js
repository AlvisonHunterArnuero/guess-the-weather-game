import * as actionTypes from "./actionTypes";

export const SetUserTemperature = (payload) => {
  return {
    type: actionTypes.UserSetTemperature,
    payload,
  };
};

export const SetCurrentCity = (payload) => {
  return {
    type: actionTypes.CitySetCurrent,
    payload,
  };
};

export const UpdateUserResponses = (payload) => {
  return {
    type: actionTypes.UserUpdateResponses,
    payload,
  };
};

export const FetchWeatherData = (city) => (dispatch)=> {
  dispatch(SetIsloading(true));
  return fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      process.env.REACT_APP_API_KEY
  )
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        throw new Error(response.status + response.statusText);
      }
    })
    .then((response) => response.json())
    .then((cityWeatherJSON) => dispatch(SetCityWeather(cityWeatherJSON)));
};

// pure function to mutate the state through the reducer
export const SetCityWeather = (payload) => {
  return {
    type: actionTypes.CitySetWeather,
    payload,
  };
};


export const SetIsloading = (payload) => {
  return {
    type: actionTypes.CitySetLoading,
    payload,
  };
};