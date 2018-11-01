import express from 'express';
const router = express.Router();
import recipe from '../public/data/receipts';

router.get('/', function (req, res) {
    res
        .status(200)
        .render('home',{
            list: recipe,
            menuID: 'home',
        })
});

module.exports = router;