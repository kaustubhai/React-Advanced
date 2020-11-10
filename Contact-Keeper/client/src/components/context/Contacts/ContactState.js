import React, { useReducer } from 'react'
import ContactsContext from './ContactsContext'
import ContactsReducer from './ContactsReducer'
import axios from 'axios';
import {
    ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER, GET_CONTACTS, CONTACT_ERROR
} from '../types'



const ContactState = (props) => {

    const initialState = {
        contacts: [],
        current: null,
        filtered: null,
        errors: null
    }

    const [state, dispatch] = useReducer(ContactsReducer, initialState)

    // Add Contact
    const addContact = async (contact) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/contacts', contact, config)
            dispatch({ type: ADD_CONTACT, payload: res.data})

        } catch (error) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.data.msg })
        }
    }
    // Get Contacts
    const loadContacts = async () => {
        try {
            const res = await axios.get('/api/contacts')
            dispatch({ type: GET_CONTACTS, payload: res.data})

        } catch (error) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.data.msg })
        }
    }
    const updateContact = async contact => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.put(`/api/contacts/${contact._id}`, contact, config)
            dispatch({ type: UPDATE_CONTACT, payload: res.data})

        } catch (error) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.data.msg })
        }
    }
    // Delete Contact
    const deleteContact = async id => {
        await axios.delete(`/api/contacts/${id}`)
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
                errors: state.errors,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter,
                loadContacts
        }}>
            {props.children}
        </ContactsContext.Provider>
    )
}

export default ContactState
