import express from 'express';
const router = express.Router();
import receipts from '../public/data/receipts';
import _ from "underscore";

router.get('/:name', function (req, res) {
    const name = _.find(receipts, {name: req.params.name});
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

module.exports = router;