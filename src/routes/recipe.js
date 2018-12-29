import express from 'express';
const router = express.Router();
import recipes from '../data/recipes';

router
    .get('/:title', function (req, res) {
        let currentRecipe;

        for(var i=0; i<recipes.length; i++){
            if(recipes[i].title==req.params.title){
                currentRecipe = recipes[i];
                break;
            }
        }

        res.render('recipe',{
            currentRecipe: currentRecipe,
            menuID: 'recipe',
            user: req.session.username
        })
    })
    .patch('/', function (req,res) {

    });

module.exports = router;