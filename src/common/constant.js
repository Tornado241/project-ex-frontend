export const HTTP_RESPONSE = {
  OK: 200,
  ERROR_CODE_401: 401,
};

export const Language = {
  EN: 'en',
  JA: 'ja',
  KO: 'ko',
  CN: 'cn',
};

export const TYPE_OF_ANT_DESIGN = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  IMG_DONE: 'done',
};

export const TIME_FORMAT = {
  DATE: 'DD-MM-YYYY',
  DATE_FORMAT_REQUEST: 'YYYY/MM/DD',
  TIME: 'HH:mm:ss',
  DATE_TIME: 'DD-MM-YYYY HH:mm:ss',
};

export const SORT_FORMAT = {
  DESC: -1,
  ASC: 1,
};

export const TIME_OUT_PROGRESS_SWAP = 1000 * 60 * 2;

export const API_URL = process.env.REACT_APP_API_URL;
