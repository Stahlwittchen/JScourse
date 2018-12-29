import express from 'express';
const router = express.Router();
import data from '../data'


function authenticate(req, username, password) {
    let authenticatedUser = data.users.find(function (user) {
        if (username === user.username && password === user.password){
            req.session.authenticaticated = true;
            req.session.username = username;
            console.log('auth has been successful')
        } else {
            return false
        }
    })
    console.log(req.session)
    return req.session;
};

router
    .get('/', function (req, res) {
        res.render('auth',{
            menuID: 'auth'
        })
    })
    .post('/',function(req,res){
        let username = req.body.username,
            password = req.body.password;
        authenticate (req,username, password);
        if (req.session && req.session.authenticated){
            res.redirect('account')
        } else {
            res.redirect('/')
        }
    });

module.exports = router;