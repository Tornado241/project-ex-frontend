import { HTTP_RESPONSE, TYPE_OF_ANT_DESIGN } from '../common/constant';
import {} from 'antd';
import _ from 'lodash';
import { getI18n } from 'react-i18next';
import showMessage from '../components/Message';
const axios = require('axios');

const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
};

const HEADERS_MULTIPLE_PART = {
  ...HEADERS,
  'Content-Type': 'multipart/form-data; boundary=something',
  Accept: 'application/json',
};

export const getToken = token => {
  HEADERS['Authorization'] = `Bearer ${token}`;
  HEADERS_MULTIPLE_PART['Authorization'] = `Bearer ${token}`;
};

const getFullUrl = url => {
  if (!url.startsWith('/')) {
    url = '/' + url;
  }
  return `${process.env.REACT_APP_API_URL}/api` + url;
};

const resetToLogin = () => {
  const promiseList = [];
  promiseList.push(localStorage.removeItem('persist:root'));
  // promiseList.push(store.dispatch(actions.postLogoutSuccess()));
  Promise.all(promiseList)
    .then(resolvedList => {
      showMessage(TYPE_OF_ANT_DESIGN.ERROR, `message.unauthorized`);
    })
    .catch(error => {
      showMessage(TYPE_OF_ANT_DESIGN.ERROR, `message.unauthorized`);
    });
};

const throttledResetToLogin = _.throttle(resetToLogin, 500, {
  leading: false,
  trailing: true,
});

const checkErrorNetwork = err => {
  if (err?.toJSON() && err.toJSON().message === 'Network Error') {
    return showMessage(TYPE_OF_ANT_DESIGN.ERROR, getI18n().t(`message.E20`));
  }
  return err;
};

const checkErrorStatus = response => {
  if (response?.meta.code === 0 || response?.data.isVerified === false) {
    return response;
  }
  showMessage(
    TYPE_OF_ANT_DESIGN.ERROR,
    response?.data?.isVerified === false ? 'message.E35' : response?.meta?.resCode ? 'message.' + response?.meta?.resCode : response?.meta?.message
  );
  return response;
};

const api = {
  post: (endpoint, params) => {
    return axios.default
      .post(getFullUrl(endpoint), params, {
        headers: HEADERS,
      })
      .then(
        response => {
          if (response?.status === HTTP_RESPONSE.ERROR_CODE_401) {
            throttledResetToLogin(endpoint, params, response);
            return response?.data;
          }
          return response?.data;
        },
        err => {
          return (err?.response?.data && checkErrorStatus(err.response.data)) || checkErrorNetwork(err);
        }
      )
      .catch(
        response => {
          return response.data;
        },
        err => {
          return (err?.response?.data && err.response.data) || checkErrorNetwork(err);
        }
      );
  },

  postMultiplePart: (endpoint, params) => {
    return axios.default
      .post(getFullUrl(endpoint), params, {
        headers: HEADERS_MULTIPLE_PART,
      })
      .then(
        response => {
          if (response?.status === HTTP_RESPONSE.ERROR_CODE_401) {
            throttledResetToLogin(endpoint, params, response);
            return response?.data;
          }
          return checkErrorStatus(response.data);
        },
        err => {
          return (err?.response?.data && checkErrorStatus(err.response.data)) || checkErrorNetwork(err);
        }
      )
      .catch(
        response => {
          return response.data;
        },
        err => {
          return (err?.response?.data && err.response.data) || checkErrorNetwork(err);
        }
      );
  },

  get: (endpoint, params = {}) => {
    return axios.default
      .get(getFullUrl(endpoint), {
        params: params,
        headers: HEADERS,
      })
      .then(
        response => {
          if (response?.status === HTTP_RESPONSE.ERROR_CODE_401) {
            throttledResetToLogin(endpoint, params, response);
            return checkErrorStatus(response?.data);
          }
          return response.data;
        },
        err => {
          return (err?.response?.data && checkErrorStatus(err.response.data)) || checkErrorNetwork(err);
        }
      )
      .catch(
        response => {
          return response.data;
        },
        err => {
          return (err?.response?.data && err.response.data) || checkErrorNetwork(err);
        }
      );
  },

  put: (endpoint, params) => {
    return axios.default
      .put(getFullUrl(endpoint), params, {
        headers: HEADERS,
      })
      .then(
        response => {
          if (response?.status === HTTP_RESPONSE.ERROR_CODE_401) {
            throttledResetToLogin(endpoint, params, response);
            return checkErrorStatus(response?.data);
          }
          return response.data;
        },
        err => {
          return (err?.response?.data && checkErrorStatus(err.response.data)) || checkErrorNetwork(err);
        }
      )
      .catch(
        response => {
          return response.data;
        },
        err => {
          return (err?.response?.data && err.response.data) || checkErrorNetwork(err);
        }
      );
  },

  delete: (endpoint, params) => {
    return axios.default
      .delete(getFullUrl(endpoint), {
        params: params,
        headers: HEADERS,
      })
      .then(
        response => {
          if (response?.status === HTTP_RESPONSE.ERROR_CODE_401) {
            throttledResetToLogin(endpoint, params, response);
            return response?.data;
          }
          return checkErrorStatus(response.data);
        },
        err => {
          return (err?.response?.data && checkErrorStatus(err.response.data)) || checkErrorNetwork(err);
        }
      )
      .catch(
        response => {
          return response.data;
        },
        err => {
          return (err?.response?.data && err.response.data) || checkErrorNetwork(err);
        }
      );
  },
};

const apiCustom = {
  get: (endpoint, params = {}) => {
    return axios.default
      .get(endpoint, {
        params: params,
        headers: HEADERS,
      })
      .then(
        response => {
          if (response?.status === HTTP_RESPONSE.ERROR_CODE_401) {
            throttledResetToLogin(endpoint, params, response);
            return checkErrorStatus(response?.data);
          }
          return response.data;
        },
        err => {
          return (err?.response?.data && checkErrorStatus(err.response.data)) || checkErrorNetwork(err);
        }
      )
      .catch(
        response => {
          return response.data;
        },
        err => {
          return (err?.response?.data && err.response.data) || checkErrorNetwork(err);
        }
      );
  },
};

export { api, apiCustom };
