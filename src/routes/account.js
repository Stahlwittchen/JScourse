import express from 'express';
const router = express.Router();
import userDetails from '../data/users';


router
    .get('/', function (req, res) {
        let userDetail;
        for(var i=0; i<userDetails.length; i++){
            if(userDetails[i].username==req.session.username){
                userDetail = userDetails[i];
                break;
            }
        }
        res
            .status(200)
            .render('account',{
                menuID: 'account',
                user: req.session.username,
                userDetail: userDetail
            })
    })

module.exports = router;