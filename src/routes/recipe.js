import express from 'express';
const router = express.Router();
// import recipes from '../data/recipes';
import Recipes from '../models/Recipe';

router
    .get('/:id', function (req, res, next) {
        Recipes.findById(req.params.id, function (err, recipe) {
            if (err) return next(err);

            res.render('recipe', {
                currentRecipe: recipe,
                menuID: 'recipe',
                login: req.session.user
            })
        });
    })

module.exports = router;