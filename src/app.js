import express from 'express';
import es6Renderer from 'express-es6-template-engine';
const app = express();

import home from './routes/home'
import receipt from './routes/receipt'
import booking from './routes/booking'

app.engine('html', es6Renderer);
app.set('views', __dirname + '/templates');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.use('/', home);
app.use('/:name', receipt);
app.use('/booking', booking);

module.exports = app;
