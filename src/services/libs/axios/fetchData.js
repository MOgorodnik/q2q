// src/services/api/photoService.js

import axios from 'axios';
import { API_BASE_URL, ENDPOINTS } from "@/services/api";

const photoApiClient = axios.create({
  baseURL: API_BASE_URL,
});

const fetchPhotos = async (pageNumber, photosPerPage, includeTotalCount = true) => {
  try {
    const response = await photoApiClient.get(ENDPOINTS.PHOTOS, {
      params: {
        _page: pageNumber,
        _limit: photosPerPage,
      },
    });

    const photos = response.data;
    let totalCount = 0;

    if (includeTotalCount) {
      totalCount = parseInt(response.headers['x-total-count'] || '0', 10);
    }

    return { photos, totalCount };
  } catch (error) {
    console.error('Error fetching photos:', error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(`Failed to fetch photos. Server responded with status: ${error.response.status}`);
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('Failed to fetch photos. No response received from server.');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error('Failed to fetch photos. Please try again later.');
    }
  }
};

export {
  fetchPhotos
};