// export const COUNT_CARS = 8;
import axios from 'axios';
axios.defaults.baseURL = 'https://653015866c756603295e3ada.mockapi.io/';
// axios.defaults.baseURL = "https://64bac8885e0670a501d6a6fc.mockapi.io";
export const getCarCatalog = async () => {
  return axios.get('/adverts');
};

export const getCarByIdCatalog = async id => {
  return axios.get(`/adverts/${id}`);
};
