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
Router.put('/:id', auth, async (req, res) => {
    try {
        const id = req.params.id
        let contact = await Contacts.findById(id)
        
        if (!contact)
            return res.status(400).send('No user Found')
        
        if (contact.user.toString() !== req.user.id)
            return res.status(400).json({ msg: "You are not authorised to perform this task"})
        
        var updatedContact = req.body;
        
        const newContact = {
            name: updatedContact.name || contact.name, email: updatedContact.email || contact.email, phone: updatedContact.phone || contact.phone, type: updatedContact.type || contact.type, user: req.user.id
        }

        const updated = await Contacts.findByIdAndUpdate(
            req.params.id,
            {$set: newContact},
            {new: true},)
        res.send(updated)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Internal Server Error'})
    }
})

// @route   DELETE api/contacts
// @desc    Delete Contacts of user
// @accesas Private
Router.delete('/:id', auth, async (req, res) => {
    try {
        const id = req.params.id
        const contact = await Contacts.findById(id)

        if (!contact)
            return res.status(400).send('No Contact Found')
        
        if (contact.user.toString() !== req.user.id) {
            console.log(req.user.id, contact.user)
            return res.status(400).json({ msg: "You are not authorised to perform this task" })
        }
            
        
        const deletedUser = await Contacts.findByIdAndDelete(id)
        res.send(deletedUser)
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
})

module.exports= Router