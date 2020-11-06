const mongoose = require('mongoose')

const ContactScheme = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String, 
        required: true
    },
    phone: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
    },
    type: {
        type: String, 
        default: 'personal',
    },
    date: {
        type: Date, 
        required: true,
        default: Date.now()
    },
})

module.exports = mongoose.model('Contacts', ContactScheme)