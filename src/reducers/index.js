import currentCityReducers from './currentCityReducer';

import {combineReducers} from 'redux';

const rootReducers = combineReducers({
currentCity: currentCityReducers,
//     myStatus: loggedReducers
});
export default rootReducers;