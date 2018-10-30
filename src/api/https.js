import axios from 'axios'
//Request url
export const API_ROOT = 'http://50.62.6.187:10031/';
//Request response time
export const API_TIME =15000;

axios.defaults.timeout = API_TIME;
axios.defaults.baseURL = API_ROOT;
axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * 封装get方法
 * Encapsulation get method
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        //reject(err)
        console.log(err);
        reject('网络异常')
      })
  })
}

/**
 * 封装post请求
 * Encapsulation post method
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装 put 请求
 *  Encapsulation put method
 * @param url
 * @param data
 * @returns {Promise}
 * */
export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
