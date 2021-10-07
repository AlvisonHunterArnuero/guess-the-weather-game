import guessWeatherReducer from './guessWeatherReducer';

import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    guessWeather: guessWeatherReducer,
});
export default rootReducers;