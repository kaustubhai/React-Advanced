import React, { useContext, useEffect } from 'react'
import ContactFilter from '../contacts/ContactFilter'
import ContactForm from '../contacts/ContactForm'
import Contacts from '../contacts/Contacts'
import AuthContext from '../context/auth/AuthContext'

const Home = () => {

    const authContext = useContext(AuthContext);
    const { loadUser } = authContext

    useEffect(() => {
        if (localStorage.token)
            loadUser()
    }, [])

    return (
        <div className="grid-2">
            <div>
                <ContactForm/>
            </div>
            <div>
                <ContactFilter/>
                <Contacts/>
            </div>
        </div>
    )
}

export default Home
