import express from 'express';
const router = express.Router();
import User from '../models/Users';
import Recipe from '../models/Recipe';
import Workshops from '../models/Workshop';

router
    .get('/', function (req, res, next) {
        if(!req.session.user){
            res.status(404)
                .redirect('/')
        }
        User.findOne({_id: req.session.user._id}).populate('_recipes _workshops').exec(function (err, user) {
            if (err) return next(err);

            res.render('account', {
                menuID: 'account',
                user: user,
                login: req.session.user
            })
        })
    })
    .post('/', function (req, res, next) {
        if (!req.body) return res.sendStatus(400);

        let newRecipe = new Recipe(req.body);
        newRecipe.author = req.session.user._id;
        newRecipe.image = "/svg/cake.svg";
        newRecipe.save(function (err) {
            if (err) {
                return next(err);
            }
            User.findOneAndUpdate({_id: req.session.user._id},{$push: { _recipes: newRecipe }}, function (err, user){
                console.log('Recipe has been saved to User');
            });
            console.log('newRecipe was successfully saved');
        });
        console.log(newRecipe);
        res.redirect('/account')
    })
    .post('/workshop', function (req, res, next) {
        if (!req.body) return res.sendStatus(400);

        let newWorkshop = new Workshops(req.body);
        newWorkshop.author = req.session.user._id;
        newWorkshop.image = "/svg/baking.svg";
        newWorkshop.cost = 1500;
        newWorkshop.available = 6;
        newWorkshop.save(function (err) {
            if (err) {
                return next(err);
            }
            User.findOneAndUpdate({},{$push: { _workshops: newWorkshop }}, function (err, user){
                console.log('Workshop has been saved to User');
            });
            console.log('newWorkshop was successfully saved');
        });
        console.log(newWorkshop);
        res.redirect('/account')
    })

module.exports = router;