import express from 'express';
const app = express();
import mongoose from 'mongoose';

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
import workshop from './routes/workshop'
import account from './routes/account'
import recipe from './routes/recipe';

const url = 'mongodb://localhost:27017/cakehunter';
mongoose.connect(url, { useNewUrlParser: true });


app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates');
app.use(express.static(__dirname + '/public'));

app.use('/', home);
app.use('/', auth);
app.use('/recipes', recipe);
app.use('/workshop', workshop);
app.use('/account', account);

module.exports = app;