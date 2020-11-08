import React, { Fragment, useContext } from 'react'
import ContactsContext from '../context/Contacts/ContactsContext'
import ContactItem from './ContactItem';

const Contacts = () => {

    const contactsContext = useContext(ContactsContext)

    const { contacts, filtered } = contactsContext;

    if (contacts.length === 0)
        return <h3 className="bg-light p-1">Your contacts will apear here</h3>

    return (
        <Fragment>
            { filtered === null ? contacts.map((contact) => <ContactItem key={contact.id} contact={contact}/>) :  filtered.map((contact) => <ContactItem key={contact.id} contact={contact}/>) }
        </Fragment>
    )
}

export default Contacts
