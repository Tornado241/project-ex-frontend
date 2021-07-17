// import BigNumber from 'bignumber.js';
// import { SORT_FORMAT, TIME_FORMAT, tokenByChainNet, TOKEN_VALUE, TYPE_TRANSACTION } from '../common/constant';
// import { useSelector } from 'react-redux';
// import moment from 'moment';

// export const getFullPathByEndpoint = endpoint => {
//   return `${process.env.REACT_APP_API_URL}${endpoint}`;
// };

// export const mapOptionTokenSwap = arrData => {
//   return arrData.map(item => ({
//     ...item,
//     url: getFullPathByEndpoint(item.url),
//     value: item.name,
//     label: `${item.currency}(${item.sort_name})`,
//   }));
// };

// export const convertEToNumber = (value, number) => {
//   BigNumber.config({
//     EXPONENTIAL_AT: 100,
//   });

//   return new BigNumber(value).toNumber() / new BigNumber(10).pow(number).toNumber();
// };

// export const getCurrentTime = () => {
//   return new Date().getTime().toString();
// };

// export const getNetWorkByName = (name, listToken = []) => {
//   if (!name) return {};
//   return listToken.find(item => item.name === name);
// };

// export const getNetWorkById = (id, listToken = []) => {
//   const nameToken = tokenByChainNet[id];
//   return getNetWorkByName(nameToken, listToken);
// };

// export const getUrlImageNetWorkByName = (name, listToken) => {
//   if (!name) return '';
//   const tokenItem = getNetWorkByName(name, listToken);
//   return `${process.env.REACT_APP_API_URL}${tokenItem?.url}`;
// };

// export const initValueNumber = value => {
//   if (!value) return '';
//   if (!parseFloat(value)) return '';
//   return value;
// };

// export const makeid = length => {
//   var result = '';
//   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for (var i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// };

// export const checkTypeCreateTransaction = (from, to) => {
//   if (from === TOKEN_VALUE.ETH && to === TOKEN_VALUE.BSC) {
//     return TYPE_TRANSACTION.LOCK;
//   } else if (from === TOKEN_VALUE.BSC && to === TOKEN_VALUE.ETH) {
//     return TYPE_TRANSACTION.UNLOCK;
//   }
//   return '';
// };

// export const convertPrice = value => {
//   BigNumber.config({
//     EXPONENTIAL_AT: 100,
//   });

//   return new BigNumber(value).multipliedBy(new BigNumber(Math.pow(10, 18))).toString();
// };

// export const convertValueBigNumber = (value, mod = true) => {
//   BigNumber.config({
//     EXPONENTIAL_AT: 100,
//   });
//   if (mod) {
//     return new BigNumber(value).dividedBy(new BigNumber(Math.pow(10, 18))).toString();
//   }
//   return new BigNumber(value).toString();
// };

// export const greaterThanOrEqualTo = (number1, number2) => {
//   return new BigNumber(number1).isGreaterThanOrEqualTo(new BigNumber(number2));
// };

// export const getCountReadNotify = (listNotify = []) => {
//   if (!listNotify.length) return 0;
//   return listNotify.filter(item => !item.isRead).length;
// };

// export const isEmpty = value => {
//   if (!value) return true;
//   return false;
// };

// export const renderAmount = (value, mod = true) => {
//   if (isEmpty(value)) return '';
//   return `${convertValueBigNumber(value, mod)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// };

// export const renderAmountWithZero = (value, mod = true) => {
//   if (isEmpty(value)) return 0;
//   return `${convertValueBigNumber(value, mod)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// };

// export const formatDateRequest = value => {
//   if (isEmpty(value)) return '';
//   return moment(value).format(TIME_FORMAT.DATE_FORMAT_REQUEST);
// };

// export const getParamSort = sorter => {
//   const { order, field } = sorter;
//   return { sortField: field, sortType: order || order === 'descend' ? SORT_FORMAT.DESC : SORT_FORMAT.ASC };
// };

// export const isEmptyItemArray = (value = '', arr = [], condition = '') => {
//   return arr.filter(item => item[condition] === value).length > 0;
// };
