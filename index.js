
/**
 * Simple export to let `require('gender-identities')` work simply.
 */

var identities = require('./identities.json').identities,
    pronouns   = require('./pronouns.json').pronouns;

module.exports = {
    identities: identities,

    pronouns: pronouns
};