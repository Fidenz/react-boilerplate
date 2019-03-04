import axios from 'axios';

const Request = axios.create({
  baseURL: 'https://fidenz.com',
});

export default Request;
