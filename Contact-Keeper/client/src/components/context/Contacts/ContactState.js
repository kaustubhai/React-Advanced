import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactsContext from './ContactsContext'
import ContactsReducer from './ContactsReducer'
import {
    ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER
} from '../types'



const ContactState = (props) => {

    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jake Peralta',
                email: 'jacob99@gmail.com',
                phone: '7456189230',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Doug Judy',
                email: 'musicforlife123@gmail.com',
                phone: '5478123069',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Pam Beesley',
                email: 'roy_halpert69@gmail.com',
                phone: '635780214',
                type: 'professional'
            },
        ]
    }

    const [state, dispatch] = useReducer(ContactsReducer, initialState)

    // Add Contact
    // Delete Contact
    // Set Current Contact
    // Clear current Cpntact
    // Update Contact
    // Filter Contact
    // Clear Filter

    return (
        <ContactsContext.Provider
            value={{
            contacts: state.contacts
        }}>
            {props.children}
        </ContactsContext.Provider>
    )
}

export default ContactState
