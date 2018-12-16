import apiFactory from '../helpers/api';

const baseUrl = process.env.REACT_APP_API_BASEURL || 'http://localhost:8080/';

const api = apiFactory(baseUrl);

export const getCities = () => api.get('/global/mock-data/cities.json');
export const getTrips = () => api.get('/global/mock-data/flights.json');
