const BASE_URL = 'https://jsonplaceholder.typicode.com';
const PHOTOS_URL = `${BASE_URL}/photos`;

const fetchTargetedPhotos = async (page, limit, fetchTotal = true) => {
  const url = new URL(PHOTOS_URL);
  url.searchParams.append('_page', page);
  url.searchParams.append('_limit', limit);

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    let total = 0;
    
    if (fetchTotal) {
      total = parseInt(response.headers.get('x-total-count') || '0', 10);
    }
    
    return { data, total };
  } catch (error) {
    console.error('Error fetching targeted photos:', error);
    throw new Error('Failed to fetch photos. Please try again later.');
  }
};

export {
  fetchTargetedPhotos
};