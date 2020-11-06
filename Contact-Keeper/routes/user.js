const express = require('express')

const Router = express.Router();

// @route   POST api/users
// @desc    Register a user
// @accesas Public
Router.post('/', (req, res) => {
    res.send('Hello')
})

module.exports= Router