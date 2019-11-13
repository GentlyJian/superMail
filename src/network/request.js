import axios from 'axios';
// 对 axios进行封装
export default function request(option, success, fuilure) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    return Promise.reject(error);
  });

  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    return Promise.reject(err);
  })

  return instance(option).then(res => {
     resolve(res);
  }).catch(err => {
    reject(err);
  });
}
