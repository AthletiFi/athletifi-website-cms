'use strict';

/**
 * join-newsletter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::join-newsletter.join-newsletter');
