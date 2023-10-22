// export const COUNT_CARS = 8;
import axios from 'axios';
axios.defaults.baseURL = 'https://648ca3ae8620b8bae7ed2c50.mockapi.io';

// axios.defaults.baseURL = 'https://64bac8885e0670a501d6a6fc.mockapi.io';
export const getCarCatalog = async () => {
  return axios.get('/adverts');
};

export const getCarByIdCatalog = async id => {
  return axios.get(`/adverts/${id}`);
};
