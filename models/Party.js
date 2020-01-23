/**
 * Data model for the parties.
 * It consists of 5 fields: title, tags, organizer, details, contact_info
 */

const Sequelize = require('sequelize');
const db = require('../config/db');

const Party = db.define('party', {
    title: {
        type: Sequelize.STRING
    },
    tags: {
        type: Sequelize.STRING
    },
    organizer: {
        type: Sequelize.STRING
    },
    details: {
        type: Sequelize.STRING
    },
    contact_info: {
        type: Sequelize.STRING
    }
});

module.exports = Party;