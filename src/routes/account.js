import express from 'express';
const router = express.Router();
import userDetails from '../data/users';
import recipes from '../data/recipes';
import workshops from '../data/workshops';

router
    .get('/', function (req, res) {
        let userDetail, myRecipes = [], myWorkshops = [];

        for(let i=0; i<userDetails.length; i++){
            if(userDetails[i].username==req.session.username){
                userDetail = userDetails[i];
                break;
            }
        }
        function isMine(arr, mylist) {
            for(let i=0; i<arr.length; i++){
                if(arr[i].author==req.session.username){
                    mylist.push(arr[i])
                }
            }
        }
        isMine(recipes, myRecipes);
        isMine(workshops, myWorkshops);

        if(!req.session.username){
            res.status(404)
                .redirect('/')
        }

        res
            .status(200)
            .render('account',{
                menuID: 'account',
                user: req.session.username,
                userDetail: userDetail,
                myRecipes: myRecipes,
                myWorkshops: myWorkshops
            })
    })
    .post('/', function (req,res) {
        let isRecipe = true,
            isWorkshop = false;
        if (req.body) {
            if (isRecipe){
                let newRecipe = {};
                newRecipe = req.body;
                newRecipe.author = req.session.username;
                newRecipe.image = "/svg/cake.svg";
                recipes.push(newRecipe);
                res.redirect('/account')
            }
            if (isWorkshop){
                let newWorkshop = {};
                newWorkshop = req.body;
                newWorkshop.author = req.session.username;
                newWorkshop.countOfSeats = 5;
                workshops.push(newWorkshop);
                res.redirect('/account')
            }
        }
    })

module.exports = router;