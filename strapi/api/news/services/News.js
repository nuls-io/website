'use strict';

/**
 * News.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

// Strapi utilities.
const utils = require('strapi-hook-bookshelf/lib/utils/');

module.exports = {

  /**
   * Promise to fetch all news.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('news', params);
    // Select field to populate.
    const populate = News.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return News.query(function(qb) {
      _.forEach(filters.where, (where, key) => {
        if (_.isArray(where.value)) {
          for (const value in where.value) {
            qb[value ? 'where' : 'orWhere'](key, where.symbol, where.value[value])
          }
        } else {
          qb.where(key, where.symbol, where.value);
        }
      });

      if (filters.sort) {
        qb.orderBy(filters.sort.key, filters.sort.order);
      }

      qb.offset(filters.start);
      qb.limit(filters.limit);
    }).fetchAll({
      withRelated: populate
    });
  },

  /**
   * Promise to fetch a/an news.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = News.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return News.forge(_.pick(params, 'id')).fetch({
      withRelated: populate
    });
  },

  /**
   * Promise to count a/an news.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('news', params);

    return News.query(function(qb) {
      _.forEach(filters.where, (where, key) => {
        if (_.isArray(where.value)) {
          for (const value in where.value) {
            qb[value ? 'where' : 'orWhere'](key, where.symbol, where.value[value])
          }
        } else {
          qb.where(key, where.symbol, where.value);
        }
      });
    }).count();
  },

  /**
   * Promise to add a/an news.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, News.associations.map(ast => ast.alias));
    const data = _.omit(values, News.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await News.forge(data).save();

    // Create relational data and return the entry.
    return News.updateRelations({ id: entry.id , values: relations });
  },

  /**
   * Promise to edit a/an news.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, News.associations.map(ast => ast.alias));
    const data = _.omit(values, News.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = News.forge(params).save(data, { path: true });

    // Create relational data and return the entry.
    return News.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an news.
   *
   * @return {Promise}
   */

  remove: async (params) => {
    await Promise.all(
      News.associations.map(association =>
        News.forge(params)[association.alias]().detach()
      )
    );

    return News.forge(params).destroy();
  }
};
