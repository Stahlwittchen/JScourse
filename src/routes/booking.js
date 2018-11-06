import express from 'express';
const router = express.Router();
import classes from '../data/master-classes';

router
    .get('/', function (req, res) {
        res
            .status(200)
            .render('booking',{
                list: classes,
                menuID: 'booking',
                user: req.session.username
            })
        })

module.exports = router;