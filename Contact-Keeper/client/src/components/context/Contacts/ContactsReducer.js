import {
    ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER, CONTACT_ERROR, GET_CONTACTS
} from '../types'

const ContactsReducer = (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return ({
                ...state,
                contacts: [...state.contacts, action.payload]
            })
        case GET_CONTACTS:
            return ({
                ...state,
                contacts: [action.payload, ...state.contacts][0]
            })
        case UPDATE_CONTACT:
            return ({
                ...state,
                contacts: state.contacts.map((contact) => contact._id === action.payload._id ? action.payload : contact)
            })
        case DELETE_CONTACT:
            return ({
                ...state,
                contacts: state.contacts.filter((contact) => contact._id !== action.payload)
            })
        case SET_CURRENT:
            return ({
                ...state,
                current: [action.payload] 
            })
        case CLEAR_CURRENT:
            return ({
                ...state,
                current: null
            })
        case FILTER_CONTACTS:
            return ({
                ...state,
                filtered: state.contacts.filter((contact) => {
                    const regex = new RegExp(`${action.payload}`, 'gi')
                    return contact.name.match(regex) || contact.phone.match(regex) || contact.email.match(regex)
                } )
            })
        case CLEAR_FILTER:
            return ({
                ...state,
                filtered: null
            })
        case CONTACT_ERROR:
            return ({
                ...state,
                errors: action.payload
            })
        default:
            return state
    }
}

export default ContactsReducer
