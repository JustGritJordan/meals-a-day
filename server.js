const path = require('path');
const express = require('express');
const session = require('express-session');
const listEndpoints = require('express-list-endpoints');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3002;

const sequelize = require('./config/connection');

const sess = {
 secret: 'Super secret secret',
 cookie: {
  maxAge: 300000,
  httpOnly: true,
  secure: false,
  sameSite: 'strict',
 },
 resave: false,
 saveUninitialized: true,
 store: new SequelizeStore({
  db: sequelize,
 }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

console.log(listEndpoints(app));

app.listen(PORT, () => {
 console.log(`App listening on port ${PORT}!`);
 sequelize.sync({ force: false });
});
