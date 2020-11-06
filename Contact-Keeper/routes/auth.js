const express = require('express')

const Router = express.Router();

// @route   GET api/auth
// @desc    Get logged in a user
// @accesas Private
Router.get('/', (req, res) => {
    res.send('Auth')
})

// @route   POST api/auth
// @desc    Auth user and give token
// @accesas Public
Router.post('/', (req, res) => {
    res.send('Auth Post')
})

module.exports= Router