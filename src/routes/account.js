import express from 'express';
const router = express.Router();
import User from '../models/Users';
import Recipes from '../models/Recipe';
// import Workshops from '../models/Workshop';

router
    .get('/', function (req, res, next) {

        if(!req.session.username){
            res.status(404)
                .redirect('/')
        }
        User.findOne({}, function (err, user){
            if (err) return next(err);

            res.render('account', {
                menuID: 'account',
                user: user,
                login: req.session.username
            })
         })
    })
    .post('/', function (req, res, next) {
        if (!req.body) return res.sendStatus(400);

        const newUser = new User(req.body);
        newUser.save(function (err) {
            if (err) {
                return next(err);
            }
            console.log('newUser was successfully saved')
            res.json(newUser);
        });
    })

module.exports = router;