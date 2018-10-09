const express = require('express');
const hbs = require('express-handlebars');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('.hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

const burgerRouter = require('./controllers/burgers_controller');

app.use(burgerRouter);

db.sequelize.sync().then(
    app.listen(PORT, () => console.log(`LISTENING ON PORT: ${PORT}`))
);
    