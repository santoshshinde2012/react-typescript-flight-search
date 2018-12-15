import * as constants from '../constants';
import { bindActionCreators, Dispatch } from 'redux';
import * as services from '../services';
import * as types from '../types';

const fetchCitiesDone = (cities?: types.Cities[]) => ({
    type: constants.FETCH_CITIES_SUCCEEDED,
    cities: cities
});

export const getCities = () => {
  return(dispatch: Dispatch) => {
    return services.getCities().then(
      (res: any) => {
        dispatch(fetchCitiesDone(res.data));
      },
      (error: any) => {
        dispatch(fetchCitiesDone());
      }
    );
  };
};
