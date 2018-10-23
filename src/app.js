import express from 'express';
import es6Renderer from 'express-es6-template-engine';
const app = express();

import _ from 'underscore';
import names from './data';

app.engine('html', es6Renderer);
app.set('views', __dirname + '/templates');
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res
        .status(200)
        .render('home',{
            locals: {MyData: names},
            partials: {
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
            nav: '/nav'
        }
    })
});

module.exports = app;