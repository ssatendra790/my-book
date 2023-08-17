const express = require('express')
const User = require('../models/User')
const router = express.Router()
const {body, validationResult} = require('express-validator');

router.use(express.json());
router.post('/',[
        body('name', 'Enter a valid name').isLength({min: 4}),
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Password is too weak').isLength({min: 5}),
    ], (req, res)=>{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }).then(user => res.json(user))
        .catch(err=>{
            console.log("Error is ", err)
            res.json({error: 'Email already exists.', message: err.message})
        })
})

module.exports = router