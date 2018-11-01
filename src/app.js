import express from 'express';
import es6Renderer from 'express-es6-template-engine';
const app = express();

import home from './routes/home'
import recipe from './routes/recipe'
import booking from './routes/booking'

app.engine('html', es6Renderer);
app.set('views', __dirname + '/templates');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.use('/', home);
app.use('/recipes', recipe);
app.use('/booking', booking);

module.exports = app;
