import * as constants from '../constants';
import * as types from '../types';

interface TripsAction {
  type: string;
  trips: types.Trips[];
}

export interface TripsState {
    trips: types.Trips[];
}

const initialState: TripsState = {
    trips: [],
};

export interface TripsReducer {
  tripsReducer: TripsState;
}

export function tripsReducer(state: TripsState = initialState, action: TripsAction): TripsState {
  switch (action.type) {
    case constants.FETCH_TRIPS_SUCCEEDED:
      return {
        trips: action.trips,
      };
    default:
      return state;
  }
}
