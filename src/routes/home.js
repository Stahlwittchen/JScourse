import express from 'express';
const router = express.Router();
//import recipe from '../data/recipes';
import Recipes from '../models/Recipe';


router.get('/', function (req, res, next) {
    Recipes.find({}, function (err, recipes) {
        if (err) return next(err);
        res
            .render('home', {
                recipes: recipes,
                menuID: 'home',
                login: req.session.username
            })
    })

});


module.exports = router;