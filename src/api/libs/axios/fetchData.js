import axios from 'axios';

const API_URL = `https://jsonplaceholder.typicode.com/photos`;
const API_URL_LIMIT = (page, limit) =>
  `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`;

const getAllPhotos = async () => (await axios.get(API_URL)).data;

const getSlicePhotos = async (p, l) => {
  return (await axios.get(API_URL_LIMIT(p, l))).data;
};

export {
  getAllPhotos,
  getSlicePhotos
}