import express from 'express';
const router = express.Router();
// import workshops from '../data/workshops';
import Workshops from '../models/Workshop';

router
    .get('/', function (req, res, next) {
        Workshops.find({}, function (err, workshops) {
            if (err) return next(err);
            res
                .status(200)
                .render('workshop', {
                    workshops: workshops,
                    menuID: 'workshop',
                    login: req.session.user
                })
        })
    })

module.exports = router;