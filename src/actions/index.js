import axios from 'axios';

const ROOT_URL = `https://api.flickr.com/services/feeds/photos_public.gne?format=json`;

export const FETCH_PHOTOS = 'FETCH_PHOTOS';

export function fetchPhotos(tag){
  const url = `${ROOT_URL}&tags=${tag}`;
  const request = axios.get(url);

  console.log('Request', request);

  return{
    type: FETCH_PHOTOS,
    payload: request
  };
}
