import * as constants from '../constants';
import * as types from '../types';

interface CitiesAction {
  type: string;
  cities: types.Cities[];
}

export interface CitiesState {
    cities: types.Cities[];
}

const initialState: CitiesState = {
    cities: [],
};

export function citiesReducer(state: CitiesState = initialState, action: CitiesAction): CitiesState {
  switch (action.type) {
    case constants.FETCH_CITIES_SUCCEEDED:
      return {
        cities: action.cities,
      };
    default:
      return state;
  }
}
