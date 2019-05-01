import axios from "axios";

axios.defaults.timeout = 5000;
axios.defaults.baseURL = "http://www.xinnengboan.com:8080/api/wp-json/wp/v2/";
axios.defaults.headers = {
  "Content-Type": "application/json; charset=utf-8"
};

//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);

// get
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// post
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    );
  });
}
