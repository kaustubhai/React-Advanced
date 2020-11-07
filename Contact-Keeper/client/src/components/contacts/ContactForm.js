import React, { useState, useEffect, useContext } from 'react'
import ContactContext from '../context/Contacts/ContactsContext'

const ContactForm = () => {

    const contactContext = useContext(ContactContext)

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    })

    useEffect(() => {
        if (contactContext.current)
            setContact(contactContext.current[0])
        else
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
            
    }, [contactContext])

    const { name, phone, email, type } = contact
    
    const onChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(!contactContext.current && name.trim() !== '')
            contactContext.addContact(contact)
        else{
            contactContext.updateContact(contact)
            contactContext.clearCurrent()}
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{ contactContext.current ? 'Update Contact' : 'Add a new Contact'}</h2>
            <input type="text" name='name' placeholder="Name" value={name} onChange={onChange} />
            <input type="email" placeholder="Email ID" name='email' value={email} onChange={onChange} /> 
            <input type="text" placeholder="Phone No." name='phone' value={phone} onChange={onChange} /> 
            <h3>Contact Type</h3>
            <input type="radio" name="type" value="personal" onChange={onChange} checked={type === 'personal'} /> Personal {' '}
            <input type="radio" name="type" value="professional" onChange={onChange} checked={type === 'professional'} /> Professional {' '}
            <div>
                <input type="submit" value={contactContext.current ? 'Update Contact' : 'Add Contact'} className="btn btn-primary btn-block" />    
                {contactContext.current && <div>
                <button className="btn btn-light btn-block" onClick={contactContext.clearCurrent}>Clear</button></div>}
            </div>

        </form>
    )
}

export default ContactForm
