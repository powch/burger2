const db = require('../models');

module.exports = (app) => {
    app.get('/', (req, res) => {
        db.Burger.findAll({}).then(
            data => res.render('index', {
                burgers: data
            })
        );
    });

    app.post('/api/burgers/', (req, res) => {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(
            burger => {
                console.log(burger);
                res.json(burger);
            }
        );
    });

    app.put('/api/burgers/:id', (req, res) => {
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
}