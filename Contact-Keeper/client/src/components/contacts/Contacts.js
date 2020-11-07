import React, { Fragment, useContext } from 'react'
import ContactsContext from '../context/Contacts/ContactsContext'
import ContactItem from './ContactItem';

const Contacts = () => {

    const contactsContext = useContext(ContactsContext)

    const { contacts } = contactsContext;

    return (
        <Fragment>
            { contacts.map((contact) => <ContactItem key={contact.id} contact={contact}/>)}
        </Fragment>
    )
}

export default Contacts
