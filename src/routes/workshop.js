import express from 'express';
const router = express.Router();
import workshops from '../data/workshops';

router
    .get('/', function (req, res) {
        res
            .status(200)
            .render('workshop',{
                workshops: workshops,
                menuID: 'workshop',
                user: req.session.username
            })
        })

module.exports = router;