import express from 'express';
const router = express.Router();
import recipes from '../data/recipes';
import _ from "underscore";

router.get('/:title', function (req, res) {
    const title = _.find(recipes, {title: req.params.title});
    if (title === undefined ) {
        res.status(404)
            .json({message: `${req.params.title} not found`})
    }
    res.render('recipe',{
        title: req.params.title,
        desc: title.desc,
        menuID: 'recipe',
        user: req.session.username
    })
});

module.exports = router;