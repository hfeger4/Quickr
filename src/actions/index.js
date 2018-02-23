import axios from 'axios';

//Example URL:
//https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=803155a8cfb51ac52e35c5793f4fd1cf&tags=cats&per_page=100&page=1&format=json&nojsoncallback=1

const ROOT_URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search`;
const SEC = `&api_key=803155a8cfb51ac52e35c5793f4fd1cf`;
const FORMAT = `&format=json&nojsoncallback=1`;
const PER_PAGE = `&per_page=30`;
const PAGES= `&page=1`;

export const FETCH_PHOTOS = 'FETCH_PHOTOS';

export function fetchPhotos(tag){
  const url = `${ROOT_URL}${SEC}&tags=${tag}${PER_PAGE}${PAGES}${FORMAT}`;
  const request = axios.get(url);

  console.log('Request', request);

  return{
    type: FETCH_PHOTOS,
    payload: request
  };
}
