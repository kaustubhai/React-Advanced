import React, { Fragment, useContext, useEffect } from 'react'
import ContactsContext from '../context/Contacts/ContactsContext'
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Contacts = () => {

    const contactsContext = useContext(ContactsContext)

    const { contacts, filtered, loadContacts } = contactsContext;

    useEffect(() => {
        loadContacts()
    // eslint-disable-next-line
    }, [])

    if (contacts.length === 0)
        return <h3 className="bg-light p-1">Your contacts will apear here</h3>

    return (
        <Fragment>
            <TransitionGroup>
            { filtered === null ? contacts.map((contact) => <CSSTransition key={contact._id} timeout={500} classNames="my-node" ><ContactItem contact={contact}/></CSSTransition>) :  filtered.map((contact) => <ContactItem key={contact._id} contact={contact}/>) }
            </TransitionGroup>
        </Fragment>
    )
}

export default Contacts
