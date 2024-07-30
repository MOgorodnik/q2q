// src\services\libs\fetch\photoService.js

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
const PHOTOS_ENDPOINT = `${API_BASE_URL}/photos`;

const fetchPhotos = async (
  pageNumber,
  photosPerPage,
  includeTotalCount = true
) => {
  const url = new URL(PHOTOS_ENDPOINT);
  url.searchParams.append('_page', pageNumber);
  url.searchParams.append('_limit', photosPerPage);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status}, text: ${await response.text()}`
      );
    }

    const photos = await response.json();
    let totalCount = 0;

    if (includeTotalCount) {
      totalCount = parseInt(response.headers.get('x-total-count') || '0', 10);
    }

    return { photos, totalCount };
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw new Error('Failed to fetch photos. Please try again later.');
  }
};

export { fetchPhotos };
