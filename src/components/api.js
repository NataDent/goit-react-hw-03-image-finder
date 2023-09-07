import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38385479-57784bf7d17c856b0f296bf8b';
const perPage = 12;

export const getImages = async (q, page) => {
  const responce = await axios.get(
    `?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return responce.data;
};
