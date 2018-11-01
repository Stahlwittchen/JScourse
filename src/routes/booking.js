import express from 'express';
const router = express.Router();
import classes from '../public/data/master-classes';
router.get('/', function (req, res) {
    res
        .status(200)
        .render('booking',{
            list: classes
        })
});

module.exports = router;