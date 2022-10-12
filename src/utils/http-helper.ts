import axios from "axios";
import { message } from 'antd';

import { apiKey, baseURL } from './constants';

export function get(params: any, url: string) {
  return axios.get(baseURL + url, {
    params: {
      api_key: apiKey,
      ...params,
    },
  }).catch(error => {
    if (error.response && error.response.status == 429) {
      message.warning("Limite de requisições por segundo excedido. Por favor, tente novamente em alguns instantes");
    } 
  });
}

export default { get };
