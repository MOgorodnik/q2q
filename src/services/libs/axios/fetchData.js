import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const PHOTOS_URL = `${BASE_URL}/photos`;

const getTargetedPhotos = async (page, limit) => {
  const response = await axios.get(PHOTOS_URL, {
    params: {
      _page: page,
      _limit: limit
    }
  });
  return {
    data: response.data,
    total: parseInt(response.headers['x-total-count'] || '0', 10)
  };
};

export {
  getTargetedPhotos
};