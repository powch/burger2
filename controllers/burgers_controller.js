const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', (req, res) => {
    db.Burger.findAll({}).then(
        data => res.render('index', {burgers: data})
    );
});

router.post('/api/burgers/', (req, res) => {
    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(
        burger => res.json(burger)
    );
});

router.put('/api/burgers/:id', (req, res) => {
    db.Burger.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.params.id
        }    
    }).then(
        burger => res.json(burger)
    );
});

module.exports = router;