const express = require('express')

const Router = express.Router();

// @route   GET api/contacts
// @desc    Get Contacts of user
// @accesas Private
Router.get('/', (req, res) => {
    res.send('Get Contacts')
})

// @route   POST api/contacts
// @desc    Add new Contacts
// @accesas Private
Router.post('/', (req, res) => {
    res.send('POST Contacts')
})

// @route   PUT api/contacts:id
// @desc    Update Contacts of user
// @accesas Private
Router.put('/:id', (req, res) => {
    res.send('Put Contacts')
})

// @route   DELETE api/contacts
// @desc    Delete Contacts of user
// @accesas Private
Router.delete('/:id', (req, res) => {
    res.send('Del Contacts')
})

module.exports= Router