import express from 'express';
const app = express();

import home from './routes/home'
import recipe from './routes/recipe'
import booking from './routes/booking'

app.set('view engine', 'ejs');

app.set('views', __dirname + '/templates');
app.use(express.static(__dirname + '/public'));

// app.use('/', home);
// app.use('/recipes', recipe);
app.use('/booking', booking);

module.exports = app;
