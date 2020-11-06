const express = require('express')
const Router = express.Router();
const auth = require('../middleware/auth')
const bcrypt = require('bcryptjs')
const config = require('config');
const jwt = require('jsonwebtoken')
const { body, validationResult } = require('express-validator');

const User = require('../models/User')

// @route   GET api/auth
// @desc    Get logged in a user
// @accesas Private

Router.get('/', auth, async (req, res) => {
    try {
        let user = await User.findById(req.user.id).select('-password')
        res.json(user)
    }
    catch (e) {
        console.log(e)
        res.status(500).json({ msg: "Authentication Error "})
    }
})

// @route   POST api/auth
// @desc    Auth user and give token
// @accesas Public
Router.post('/', [
    body('email', "Please include a valid email").isEmail(),
    body('password', "Password is required").exists()
], async (req, res) => {
        
        const error = validationResult(req)
        if (!error.isEmpty())
            return res.status(400).json({ error })
        
        const { email, password } = req.body

        try {
            let user = await User.findOne({ email })
            if (!user)
                return res.status(400).json({ msg: "User Not Found" })
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch)
                return res.status(400).json({ msg: "Invalid Credentials" })
            
            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(payload, config.get('jwtSecret'), {
                expiresIn: 3600
            }, (err, token) => {
                    if (err)
                        throw err
                    
                    res.json({token})
            })
        }
        catch (e) {
            console.log(e)
            res.status(500).json({ msg: "Server Error"})
        }
})

module.exports= Router