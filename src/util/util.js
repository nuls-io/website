import {BigNumber} from 'bignumber.js'

/**
 * 接口地址 Interface address
 * @type {string}
 */
export const http = 'http://192.168.1.130:8080';

/**
 *  用户选择的语言 User selected language
 * @type {string}
 */
export const siteId = sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') ==='zh' ? '1' : '2' : '2';

/**
 * 加法
 * @param nu
 * @param arg
 * @returns {BigNumber}
 * @constructor
 */
export function plus(nu, arg) {
  let newMinus = new BigNumber(nu);
  return newMinus.plus(arg);
}

/**
 * 减法
 * @param nu
 * @param arg
 * @returns {BigNumber}
 * @constructor
 */
export function Minus(nu, arg) {
  let newMinus = new BigNumber(nu);
  return newMinus.minus(arg);
}

/**
 * 除法
 * @param nu
 * @param arg
 * @returns {BigNumber}
 * @constructor
 */
export function Times(nu, arg) {
  let newTimes = new BigNumber(nu);
  return newTimes.times(arg);
}

/**
 * 除法
 * @param nu
 * @param arg
 * @returns {BigNumber}
 * @constructor
 */
export function Division(nu, arg) {
  let newDiv = new BigNumber(nu);
  return newDiv.div(arg);
}

/**
 * 超长数字显示
 * @param nu
 * @param powerNu
 * @returns {string}
 */
export function langNumber(nu, powerNu) {
  let newNu = new BigNumber(Division(nu, powerNu).toString());
  return newNu.toFormat().replace(/[,]/g, '');
}

/**
 * 根据不同时区显示时间
 * @param time
 * @returns {*}
 */
export function getLocalTime(time) {
  if (typeof time !== 'number') return;
  let d = new Date();
  let offset = d.getTimezoneOffset() * 60000;
  let localUtc = new Date().getTimezoneOffset() / 60;
  let utcTime;
  if (localUtc > 0) {
    utcTime = time - offset;
  } else {
    utcTime = time + offset;
  }
  let localTime = utcTime + 3600000 * Math.abs(localUtc);
  return new Date(localTime);
}

/**
 * html转码
 * @param str
 * @returns {s}
 */
export function htmlEncodeByRegExp(str) {
  let s = "";
  if (str.length === 0) return "";
  s = str.replace(/&/g, "&amp;");
  s = s.replace(/</g, "&lt;");
  s = s.replace(/>/g, "&gt;");
  s = s.replace(/ /g, "&nbsp;");
  s = s.replace(/[\n\r]/g, '&nbsp;');
  s = s.replace(/\'/g, "&#39;");
  s = s.replace(/\"/g, "&quot;");
  return s;
}

/**
 * html解码
 * @param str
 * @returns {s}
 */
export function htmlDecodeByRegExp(str) {
  let s = "";
  if (str.length === 0) return "";
  s = str.replace(/&amp;/g, "&");
  s = s.replace(/&lt;/g, "<");
  s = s.replace(/&gt;/g, ">");
  s = s.replace(/&nbsp;/g, " ");
  s = s.replace(/&#39;/g, "\'");
  s = s.replace(/&quot;/g, "\"");
  return s;
}


