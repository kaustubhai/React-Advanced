import React, { useReducer } from 'react'
import {v4 as uuid} from 'uuid'
import ContactsContext from './ContactsContext'
import ContactsReducer from './ContactsReducer'
import {
    ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER, CLEAR_CONTACTS
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
        ],
        current: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(ContactsReducer, initialState)

    // Add Contact
    const addContact = contact => {
        contact.id = uuid()
        dispatch({ type: ADD_CONTACT, payload: contact})
    }
    // Update Contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact})
    }
    // Delete Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id})
    }
    // Set Current Contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact})
    }
    // Clear current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }
    // Filter Contact
    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text})
    }
    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }

    return (
        <ContactsContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
        }}>
            {props.children}
        </ContactsContext.Provider>
    )
}

export default ContactState
