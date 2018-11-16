import express from 'express';
const router = express.Router();
import classes from '../data/workshops';

router
    .get('/', function (req, res) {
        res
            .status(200)
            .render('workshop',{
                list: classes,
                menuID: 'workshop',
                user: req.session.username
            })
        })

module.exports = router;