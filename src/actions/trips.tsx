import * as constants from '../constants';
import { bindActionCreators, Dispatch } from 'redux';
import * as services from '../services';
import * as types from '../types';
import * as moment from 'moment';

const fetchTripsDone = (trips?: types.Trips[]) => ({
    type: constants.FETCH_TRIPS_SUCCEEDED,
    trips: trips
});

const flightSearch = (flights: types.Trips[] = [], startDate?: Date, selectedCities?: string[]) => {
 
  if (!selectedCities || !selectedCities.length) {
    return flights;
  }

  const trips = flights.filter(flight => selectedCities.indexOf(flight.from_code || '') >= 0);

  return trips;
};

export const getTrips = (startDate?: Date, selectedCities?: string[]) => {
  return(dispatch: Dispatch) => {
    return services.getTrips().then(
      (res: any) => {
        dispatch(fetchTripsDone(flightSearch(res.data, startDate, selectedCities)));
      },
      (error: any) => {
        dispatch(fetchTripsDone());
      }
    );
  };
};
