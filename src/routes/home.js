import express from 'express';
const router = express.Router();
import recipe from '../data/recipes';

router.get('/', function (req, res) {
    res
        .status(200)
        .render('home',{
            list: recipe,
            menuID: 'home',
            user: req.session.username
        })
});

module.exports = router;