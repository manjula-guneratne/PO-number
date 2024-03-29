const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
// public folder access
const path = require('path');
// to get handlebars connection
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
// add the session
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const sess = {
  secret: 'testing testing testing',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// to get access to public
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//session connected
app.use(session(sess));

//turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
