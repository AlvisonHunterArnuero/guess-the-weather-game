import * as actionTypes from "../actions/actionTypes";

const guessWeatherReducer = (
  state = {
    temperature: 0,
    currentCity: 0,
    arrResponses: [],
    cityWeather: {},
    isLoading : false
  },
  action
) => {
  switch (action.type) {
    case actionTypes.UserSetTemperature:
      return {
        ...state,
        temperature: action.payload,
      };

    case actionTypes.CitySetCurrent:
      return {
        ...state,
        currentCity: action.payload,
      };
    case actionTypes.UserUpdateResponses:
      return {
        ...state,
        arrResponses: action.payload,
      };

    case actionTypes.CitySetWeather:
      return {
        ...state,
        cityWeather: action.payload,
        isLoading: false
      };

      case actionTypes.CitySetLoading:
        return {
          ...state,
          isLoading: action.payload,
        };

    default:
      return state;
  }
};

export default guessWeatherReducer;
