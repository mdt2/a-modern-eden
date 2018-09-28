'use strict';

/**
 * Output block if NODE_ENV===production
 *
 * @since v0.1.0
 * @example
 *
 * {{#ifProd}}
 *   <link rel="stylesheet" href="prod.css">
 * {{/ifProd}}
 *
 */

module.exports = function ifProd(opts) {
  if (process.env.NODE_ENV === 'production') {
    return opts.fn(this);
  }

  return null;
};
