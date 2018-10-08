const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();


router.get('/', (req, res) => {
    burger.all(data => {
        res.render('index', {burgers: data});
    });
});

router.post('/api/burgers/', (req, res) => {
    burger.create(
      ['burger_name', 'devoured'],
      [req.body.burger_name, req.body.devoured],
      result => res.json(result)
    );
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id=${req.params.id}`;

    burger.eat(
        { devoured: req.body.devoured },
        condition,
        result => {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    );
});

module.exports = router;