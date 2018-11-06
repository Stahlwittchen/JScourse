import express from 'express';
const app = express();

import session from 'express-session';
import bodyParser from 'body-parser';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    secret: 'session-secret',
    saveUninitialized: true,
    resave: true
}));

import auth from './routes/auth';
import home from './routes/home'
import booking from './routes/booking'
import account from './routes/account'
import recipe from './routes/recipe';

app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates');
app.use(express.static(__dirname + '/public'));

app.use('/', home);
app.use('/auth', auth);
app.use('/recipes', recipe);
app.use('/booking', booking);
app.use('/account', account);

module.exports = app;