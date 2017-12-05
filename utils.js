'use strict';

//var utils = require('lazy-cache')(require);
//var fn = require;
//require = utils;

/**
 * Lazily required module dependencies
 */

var utils = {};

utils.define = require('define-property');
utils.extend = require('extend-shallow');
utils.isObject = require('isobject');
//require = fn;

/**
 * Expose `utils` modules
 */

module.exports = utils;
