const express = require('express')
const Router = express.Router();
const auth = require('../middleware/auth')
const { body, validationResult } = require('express-validator');

const User = require('../models/User')
const Contacts = require('../models/Contacts')


// @route   GET api/contacts
// @desc    Get Contacts of user
// @accesas Private
Router.get('/', auth, async (req, res) => {
    try {
        const contacts= await Contacts.find({ user: req.user.id }).sort({ date: -1 })
        res.json(contacts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Internal Server Error"})
    }
})

// @route   POST api/contacts
// @desc    Add new Contacts
// @accesas Private
Router.post('/', [auth,
    body('name', "Name is Required").not().isEmpty(),
    body('phone', "Phone Number is Required").not().isEmpty()],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json(errors)
        const { name, email, phone, type } = req.body

        try {
            const newContact = new Contacts({
                name, email, phone, type, user: req.user.id
            })

            const contact = await newContact.save()

            res.send(contact)
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Internal Server Error"})
        }
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