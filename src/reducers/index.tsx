
import { combineReducers } from 'redux';
import { citiesReducer } from './cities';
import { tripsReducer } from './trips';

const rootReducer = combineReducers({
    citiesReducer,
    tripsReducer
});

export default rootReducer;
