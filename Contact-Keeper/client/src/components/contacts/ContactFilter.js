import React, { useContext, useRef, useEffect } from 'react'
import ContactsContext from '../context/Contacts/ContactsContext'

const ContactFilter = () => {

    const text = useRef('')
    const contactContext = useContext(ContactsContext)

    useEffect(() => {
        if (!contactContext.filtered)
            contactContext.clearFilter()
        // eslint-disable-next-line
    }, [])

    const onChange = (e) => {
        if(text.current.value.trim() !== '')
            contactContext.filterContacts(text.current.value)
        else
            contactContext.clearFilter()
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text" ref={text} name="filter" placeholder="Search Contacts..." />
        </form>
    )
}

export default ContactFilter
