import express from 'express';
const router = express.Router();
import receipts from '../public/data/receipts';

router.get('/', function (req, res) {
    res
        .status(200)
        .render('home',{
            locals: {MyData: receipts},
            partials: {
                pageHead: '/page-head',
                nav: '/nav'
            }
        })
});

module.exports = router;