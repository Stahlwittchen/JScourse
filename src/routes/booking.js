import express from 'express';
const router = express.Router();

router.get('/', function (req, res) {
    res
        .status(200)
        .render('booking',{
            partials: {
                pageHead: '/page-head',
                nav: '/nav'
            }
        })
});

module.exports = router;