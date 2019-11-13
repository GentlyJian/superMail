import request from './request';

export function getHomeData() {
  return request({
    method: 'get',
    url: '/home/multidata',
  })
}
