import {fetch, post, put} from './https'
/**
 *  获取语言列表 Get languages list
 * @returns {Promise}
 */
export const getLanguagelist = () => fetch('languagelist.html');

/**
 *  获取下载列表 Get download list
 *  @param siteId
 * @param pageSize
 * @param pageNum
 * @returns {Promise}
 */
export const getDownloadList = (siteId=1,pageSize=10,pageNum=1) => fetch('downloads.html?siteId=' + siteId + '&pageSize=' + pageSize + '&pageNum=' + pageNum);

/**
 * 获取轮播列表 get banner list
 * @param siteId
 * @returns {Promise}
 */
export const getBannerList = (siteId=1) => fetch('banner.html?siteId=' + siteId);

/**
 *  获取新闻列表 Get new list
 * @param siteId
 * @param pageSize
 * @param pageNum
 * @returns {Promise}
 */
export const getNewList = (siteId=1,pageSize=10,pageNum=1) => fetch('nulsnews.html?siteId=' + siteId + '&pageSize=' + pageSize + '&pageNum=' + pageNum);

/**
 *  获取Guide列表 Get guide list
 * @param siteId
 * @param pageSize
 * @param pageNum
 * @returns {Promise}
 */
export const getGuideList = (siteId=1,pageSize=10,pageNum=1) => fetch('guides.html?siteId=' + siteId + '&pageSize=' + pageSize + '&pageNum=' + pageNum);

/**
 *  获取FindUs列表 Get FindUs list
 * @param siteId
 * @param pageSize
 * @param pageNum
 * @returns {Promise}
 */
export const getFindUsList = (siteId=1,pageSize=10,pageNum=1) => fetch('findus.html?siteId=' + siteId + '&pageSize=' + pageSize + '&pageNum=' + pageNum);

/**
 *  获取团队列表 Get team list
 * @param siteId
 * @param pageSize
 * @param pageNum
 * @returns {Promise}
 */
export const getTeamList = (siteId=1,pageSize=10,pageNum=1) => fetch('teamlist.html?siteId=' + siteId + '&pageSize=' + pageSize + '&pageNum=' + pageNum);

/**
 *  获取合作伙伴列表 Get partner list
 * @param siteId
 * @param pageSize
 * @param pageNum
 * @returns {Promise}
 */
export const getPartnerList = (siteId=1,pageSize=10,pageNum=1) => fetch('partner.html?siteId=' + siteId + '&pageSize=' + pageSize + '&pageNum=' + pageNum);

/**
 * post 方法
 * @param params
 * @returns {Promise}
 */
export const postMethod = (params) => post('/**/**/'+version);

/**
 * put 方法
 * @param params
 * @returns {Promise}
 */
export const putMethod = (params) => put('/****/***/'+language);





