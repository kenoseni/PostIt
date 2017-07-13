const User = require('../models').User;
const session = require('express-session');
module.exports = {
    signup(req, res) {
        return User
            .create({
                name:req.body.name,
                email: req.body.email,
                password: req.body.password 
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },
    signin(req, res) {
        return User
        .findOne({where:
             {name: req.body.name, password:req.body.password}})
        .then(user => {
            if(!user) {
                return res.status(404).send('user not found')
             }
           // req.session.user = user;
            res.status(202).send(user); 
        })
        .catch(error => res.status(400).send(error));
    
                 
    }
};  