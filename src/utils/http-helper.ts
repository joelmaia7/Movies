import axios from "axios";
import { apiKey, baseURL } from './constants';

export function get(params: any, url: string) {
  return axios.get(baseURL + url, {
    params: {
      api_key: apiKey,
      ...params,
    },
  });
}

export default { get };
