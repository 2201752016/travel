import axios from 'axios';

const BASE_URL = 'https://travel-journal-api-bootcamp.do.dibimbing.id/api/';

export const getActivities = async () => {
  const response = await axios.get(`${BASE_URL}/activities`);
  return response.data;
};

export const getPromos = async () => {
  const response = await axios.get(`${BASE_URL}/promos`);
  return response.data;
};
