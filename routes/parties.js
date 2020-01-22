const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Party = require('../models/Party');

router. get('/', (req, res) => 
    Party.findAll()
        .then(parties => {
            console.log(parties);
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));

module.exports = router;
