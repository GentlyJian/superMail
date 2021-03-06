import request from './request';

export function getHomeData() {
  return request({
    method: 'get',
    url: '/home/multidata',
  })
}

export function getHomeGoods(type, page){
  return request({
    params: {
      type,
      page
    }
  })
}
