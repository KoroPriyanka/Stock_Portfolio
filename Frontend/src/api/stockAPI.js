import axios from 'axios';

const API_URL = 'http://localhost:8080/api/stocks';

export const getStocks = async () => {
  return axios.get(API_URL);
};

export const addStock = async (stock) => {
  return axios.post(API_URL, stock);
};

export const deleteStock = async (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
