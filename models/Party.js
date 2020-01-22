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