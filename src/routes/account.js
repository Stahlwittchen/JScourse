import express from 'express';
const router = express.Router();
import User from '../models/Users';
import Recipe from '../models/Recipe';
// import Workshops from '../models/Workshop';

router
    .get('/', function (req, res, next) {
        if(!req.session.user){
            res.status(404)
                .redirect('/')
        }
        User.findOne({}, function (err, user){
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
        newRecipe.image = "/svg/cake.svg",
        newRecipe.save(function (err) {
            if (err) {
                return next(err);
            }
            User.findOneAndUpdate({},{$push: { _recipes: newRecipe }}, function (err, user){
                // console.log(newRecipe);
                // user._recipes.push(newRecipe);
                // user.save(function (err) {
                // });
                console.log('Recipe has been saved to User');
            })
            console.log('newRecipe was successfully saved');
            //res.json(newRecipe);
        });
        console.log(newRecipe)
        res.redirect('/account')
    })

module.exports = router;