import axios from 'axios';

export default async function requestSender(options) {
  const response = await axios({
    ...options,
    withCredentials: true,
  });
  return response.data;
}