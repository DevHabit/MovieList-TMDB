import axios from 'axios';
import {BASE_URL, API_KEY} from '@constants';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: API_KEY,
  },
});
