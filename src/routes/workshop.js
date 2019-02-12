import express from 'express';
const router = express.Router();
import Workshops from '../models/Workshop';
import Request from '../models/Request';
import User from "../models/Users";

router
    .get('/', function (req, res, next) {
        Workshops.find({}).populate('author _booked').exec(function (err, workshops){
            if (err) return next(err);
            res.status(200)
                .render('workshop', {
                    workshops: workshops,
                    menuID: 'workshop',
                    login: req.session.user
                })
        })
    })
    .post('/', function (req, res, next) {
        if (!req.body) return res.sendStatus(400);
        //console.log('Workshop has been saved to User');
        let newRequest = new Request(req.body);
        newRequest.save(function (err) {
            Workshops.findOneAndUpdate({_id: req.body.parentID}, {$push: { _booked: newRequest }}, function (err, user) {
                if (err) {
                    return next(err);
                }
                console.log('Workshop has been saved to User ', user);
            });
        });
        res.redirect('/workshop')
    })

module.exports = router;