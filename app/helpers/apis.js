/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
import * as config from '../config';

export const getPosts = (postId = '') => {
  const options = {};

  options.url = `${config.API_URL}/posts/${postId}?_expand=user`;
  options.method = 'GET';
  return makeRequest(options);
};

export const findUsers = (query = '') => {
  if (query) {
    query = `?q=${query}`;
  }
  const options = {};

  options.url = `${config.API_URL}/users${query}`;
  options.method = 'GET';
  return makeRequest(options);
};

export const findPosts = (query = '') => {
  if (query) {
    query = `?q=${query}`;
  }
  const options = {};

  options.url = `${config.API_URL}/posts${query}`;
  options.method = 'GET';
  return makeRequest(options);
};

export const findUserById = userId => {
  const options = {};

  options.url = `${config.API_URL}/users/${userId}`;
  options.method = 'GET';
  return makeRequest(options);
};

export const getPostById = postId => {
  const options = {};

  options.url = `${config.API_URL}/posts/${postId}?_expand=user`;
  options.method = 'GET';
  return makeRequest(options);
};

export const getCommentsByPostId = postId => {
  const options = {};

  options.url = `${config.API_URL}/posts/${postId}/comments?_expand=user`;
  options.method = 'GET';
  return makeRequest(options);
};

export const getUserStats = userId => {
  const userStats = ['posts', 'comments'];
  const userStatsRequests = userStats.map(stats => {
    const options = {};

    options.url = `${config.API_URL}/users/${userId}/${stats}`;
    options.method = 'GET';
    return options;
  });
  const userStatsRequestsPromise = userStatsRequests.map(options => makeRequest(options));

  return Promise.all(userStatsRequestsPromise);
}

const parseJson = data => {
  if (JSON.parse && JSON.parse(data)) {
    return JSON.parse(data);
  }
  return data;
};

const makeRequest = options =>
  new Promise((resolve, reject) => {
    const xhttp =
      // eslint-disable-next-line no-undef
      new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        resolve(parseJson(this.responseText));
      }
      if (this.readyState === 4 && this.status >= 400) {
        reject(this.responseText);
      }
    };
    xhttp.open(options.method, options.url, true);
    xhttp.send();
  });
