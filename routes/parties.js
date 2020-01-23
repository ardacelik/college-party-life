const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Party = require('../models/Party');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get the list of parties
router.get('/', (req, res) => 
    Party.findAll()
        .then(parties => res.render('parties', { parties }))
        .catch(err => console.log(err)));

// Add a party form
router.get('/add', (req, res) => res.render('add'));

// Add a party
router.post('/add', (req, res) => {
    
    let { title, tags, organizer, details, contact_info } = req.body;
    let errors = [];

    // Validate fields
    if(!title) {
        errors.push({ text: 'Please add a title' });
    }
    if(!tags) {
        errors.push({ text: 'Please add some tags' });
    }
    if(!details) {
        errors.push({ text: 'Please add the details of the party' });
    }
    if(!organizer) {
        errors.push({ text: 'Please add the organizer' });
    }
    if(!contact_info) {
        errors.push({ text: 'Please add the contact information' });
    }

    // Check for errors
    if(errors.length > 0) {
        res.render('add', {
            errors,
            title,
            tags,
            organizer,
            details,
            contact_info
        });
        } else {

            tags = tags.toLowerCase().replace(/, /g, ', ');
            // Insert into the table
            Party.create({
                title,
                tags,
                organizer,
                details,
                contact_info
            })
            .then(party => res.redirect('/parties'))
            .catch(err => console.log(err));
        }

});

// Search for parties
router.get('/search', (req, res) => {
    let { term } = req.query;

    term = term.toLowerCase();

    Party.findAll({ where: { tags: { [Op.like]: '%' + term + '%' } } })
        .then(parties => res.render('parties', { parties }))
        .catch(err => console.log(err));
});

module.exports = router;