import express from 'express';
const router = express.Router();
import userDetails from '../data/users';
import recipes from '../data/recipes';
import classes from '../data/master-classes';

router
    .get('/', function (req, res) {
        let userDetail, list = [], myClasses = [];

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
        isMine(recipes, list)
        isMine(classes, myClasses);

        res
            .status(200)
            .render('account',{
                menuID: 'account',
                user: req.session.username,
                userDetail: userDetail,
                list: list,
                myClasses: myClasses
            })
    })
    .post('/', function (req,res) {
        let orderData = {};
        if (req.body) {
            console.log(req.body);
            orderData = req.body;
            orderData.author = req.session.username;
            orderData.image = "/svg/cake.svg";
        }
        console.log(orderData);
        recipes.push(orderData);
    })

module.exports = router;