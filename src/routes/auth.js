import express from 'express';
const router = express.Router();
import User from "../models/Users";

router
    .get('/auth', function (req, res) {
        res.render('auth',{
            menuID: 'auth',
            login: req.session.user
        })
    })
    .get('/signout',function(req,res){
        req.session.destroy();
        res.redirect('/')
        return res.status(200).send();
    })
    .post('/signin',function(req,res){
        let username = req.body.username,
            password = req.body.password;
        
        User.findOne({username: username, password: password}, function (err, user) {
            if(err){
                console.log(err);
                return res.status(500).send();
            }
            if(!user){
                console.log('юзер не найден');
                res.redirect('/')
            }
            req.session.authenticaticated = true;
            req.session.user = user;
            console.log('auth has been successful')
            console.log(req.session);
            res.redirect('/account')
        })

    })
    .post('/signup',function(req,res, next){
        let username = req.body.username;
        let password = req.body.password;
        let email = req.body.email;
        let phone = req.body.phone;

        let newUser = new User(req.body);
        newUser.username = username;
        newUser.password = password;
        newUser.email = email;
        newUser.phone = phone;
        newUser.admin = false;
        newUser.avatar = "/svg/baker.svg";
        newUser.save(function (err) {
            if (err) {
                return next(err);
            }
            console.log('new User was successfully saved');
        });

        req.session.authenticaticated = true;
        req.session.user = newUser;
        console.log('auth has been successful')
        console.log(req.session);
        res.redirect('/account')
    });

module.exports = router;