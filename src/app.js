import express from 'express';
import es6Renderer from 'express-es6-template-engine';
const app = express();

import _ from 'underscore';
import names from './data';

app.engine('html', es6Renderer);
app.set('views', __dirname + '/templates');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res
        .status(200)
        .render('home',{
            locals: {MyData: names},
            partials: {
                pageHead: '/page-head',
                nav: '/nav'
            }
        })
});

app.get('/contacts', function (req, res) {
    res
        .status(200)
        .render('contacts',{
            partials: {
                pageHead: '/page-head',
                nav: '/nav'
            }
        })
});

app.get('/:name', function (req, res) {
    const name = _.find(names, {name: req.params.name});
    if (name === undefined ) {
        res.status(404)
            .json({message: `${req.params.name} not found`})
    }
    res.render('index',{
        locals: {
            user: req.params.name,
            desc: name.desc
        },
        partials: {
            pageHead: '/page-head',
            nav: '/nav'
        }
    })
});

module.exports = app;