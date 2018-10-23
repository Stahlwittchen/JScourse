import express from 'express';
const app = express();

import _ from 'underscore';
import names from './data';

app.get('/', function (req, res) {
    res
        .status(200)
        .json(names);
});

app.get('/:name', function (req, res) {
    const name = _.find(names, {name: req.params.name});
    if (name === undefined ) {
        res.status(404)
            .json({message: `${req.params.name} not found`})
    }
    res.json(name);
});

module.exports = app;